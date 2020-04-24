const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
    const { rows } = await db.query(`
        SELECT ads.*, roles.name as role_name, roles.initials as role_initials, roles.color as role_color, units.name as unit_name, departments.name  as department_name, 
		branches.name as branch_name, locations.name as location, users.display_name advertiser,
		(SELECT ARRAY(SELECT st.name  
		            FROM jobs.standards_of_ads standardsOfAds
		            JOIN jobs.standards st on standardsOfAds.standard_id = st.id
                    WHERE standardsOfAds.advertisement_id = ads.id)) as standards_array
        FROM  jobs.advertisements ads 
        JOIN jobs.roles roles ON ads.role_id=roles.id
        JOIN jobs.units units ON ads.unit_id=units.id
        JOIN jobs.branches branches ON (ads.branch_id=branches.id AND ads.unit_id=branches.unit_id)
        JOIN jobs.departments departments ON (ads.department_id=departments.id AND ads.branch_id=departments.branch_id)
        JOIN jobs.base_locations locations ON ads.base_location_id=locations.id
        JOIN jobs.users users ON ads.advertiser_upn=users.upn`);
    res.json(rows);
});

router.get('/options', async (req, res) => {
    // TODO: Refactor into loop of tables, rather than 1 by 1 

    const standardOptions = await db.query(`
        SELECT id, name
        FROM jobs.standards
    `).then(result => result.rows);

    const roleOptions = await db.query(`
        SELECT id, name
        FROM jobs.roles
    `).then(result => result.rows);

    const baseLocationOptions = await db.query(`
        SELECT id, name
        FROM jobs.base_locations
    `).then(result => result.rows);

    // TODO: Unit-Branch-Department, load necessary in future... 
    const unitOptions = await db.query(`
        SELECT id, name
        FROM jobs.units
    `).then(result => result.rows);

    const allSelectOptions = {
        roleOptions,
        standardOptions,
        baseLocationOptions,
        unitOptions
    };

    res.json(allSelectOptions);
});

router.get('/branches/:unitId', async (req, res) => {
    const { unitId } = req.params;

    const branchesOfUnit = await db.query(`
        SELECT id, name
        FROM jobs.branches
        WHERE unit_id = $1
    `, [unitId]).then(result => result.rows);

    res.json(branchesOfUnit);
});

router.get('/departments/:branchId', async (req, res) => {
    const { branchId } = req.params;

    const departmentsOfBranch = await db.query(`
        SELECT id, name
        FROM jobs.departments
        WHERE branch_id = $1
    `, [branchId]).then(result => result.rows);

    res.json(departmentsOfBranch);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const ads = req.body;
    const { baseLocation, departmentData, jobNickname, role,
            standards, entryDate, yearsInSeniority, shouldHaveDamach, 
            jobDescription, contactInformation} = ads;

    const baseLocationId = baseLocation.id;
    const roleId = role.id;
    const { unit, branch, department } = departmentData;
    const unitId = unit.id;
    const branchId = branch.id;
    const departmentId = department.id;
    const standardIds = standards.map(standard => standard.id);
    try {
        await db.query('BEGIN');
        // await db.query(`
        // INSERT INTO jobs.advertisements(role_id, unit_id, branch_id, department_id, job_title,job_description, entry_date, seniority, is_damach, advertiser_upn, contact, base_location_id) VALUES
        // (1, 4, 1, 1, 1,'מנהל מוצר מעגל האש', 'מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '09/20', 2, true, 's8182384', 'פלאפון 0527777780', 1)        
        // `);
        const values = [roleId, unitId, branchId, departmentId, jobNickname, jobDescription, entryDate, yearsInSeniority, shouldHaveDamach, req.user, `${contactInformation.fullName} ${contactInformation.phoneNumber}`, baseLocationId];
        const advertisementId = await db.query(`
            INSERT INTO jobs.advertisements (
                role_id, unit_id, branch_id, department_id, job_title, job_description, entry_date, seniority, is_damach, advertiser_upn, contact, base_location_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
            RETURNING id
        `, values).then(result => result.rows[0].id);
        
        for (const standardId of standardIds) {
            await db.query(`
                INSERT INTO jobs.standards_of_ads (
                    advertisement_id, standard_id 
                ) VALUES ($1, $2)
            `, [advertisementId, standardId]);
        }

        // TODO: Use unnest($2::integer[]), pq-function-unnestunknown-is-not-unique
        // await db.query(`
        //     INSERT INTO jobs.standards_of_ads (
        //         advertisement_id, standard_id 
        //     ) VALUES ($1, ${standardIds})
        // `, [advertisementId]);

        await db.query('COMMIT');
        res.sendStatus(200);
    } catch(error) {
        console.log("Error is " + error);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});

module.exports = router;