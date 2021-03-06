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
        JOIN jobs.users users ON ads.advertiser_upn=users.upn
        WHERE ads.is_close=false`);
    res.json(rows);
});

router.get('/options', async (req, res) => {
    // TODO: Refactor into loop of tables, rather than 1 by 1

    const standardOptions = (
        await db.query(`
        SELECT id, name
        FROM jobs.standards
    `)
    ).rows;

    const roleOptions = (
        await db.query(`
        SELECT id, name
        FROM jobs.roles
    `)
    ).rows;

    const baseLocationOptions = (
        await db.query(`
        SELECT id, name
        FROM jobs.base_locations
    `)
    ).rows;

    // TODO: Unit-Branch-Department, load necessary in future...
    const unitOptions = (
        await db.query(`
        SELECT id, name
        FROM jobs.units
    `)
    ).rows;

    const branchOptions = (
        await db.query(`
        SELECT id, name, unit_id
        FROM jobs.branches
    `)
    ).rows;

    const departmentOptions = (
        await db.query(`
        SELECT id, name, branch_id
        FROM jobs.departments
    `)
    ).rows;

    const qualificationOptions = (
        await db.query(`
        SELECT id, name
        FROM jobs.qualifications
    `)
    ).rows;

    const allSelectOptions = {
        roleOptions,
        standardOptions,
        baseLocationOptions,
        unitOptions,
        branchOptions,
        departmentOptions,
        qualificationOptions,
    };

    res.json(allSelectOptions);
});

router.get('/branches/:unitId', async (req, res) => {
    const { unitId } = req.params;

    const branchesOfUnit = await db
        .query(
            `
        SELECT id, name
        FROM jobs.branches
        WHERE unit_id = $1
    `,
            [unitId]
        )
        .then((result) => result.rows);

    res.json(branchesOfUnit);
});

router.get('/departments/:branchId', async (req, res) => {
    const { branchId } = req.params;

    const departmentsOfBranch = await db
        .query(
            `
        SELECT id, name
        FROM jobs.departments
        WHERE branch_id = $1
    `,
            [branchId]
        )
        .then((result) => result.rows);

    res.json(departmentsOfBranch);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const ads = req.body;
    const { baseLocation, departmentData, jobNickname, role,
        standards, entryDate, yearsInSeniority, shouldHaveDamach,
        jobDescription, contactInformation
    } = ads;

    const baseLocationId = baseLocation.id;
    const roleId = role.id;
    const { unit, branch, department } = departmentData;
    const unitId = unit.id;
    const branchId = branch.id;
    const departmentId = department.id;
    const standardIds = standards.map((standard) => standard.id);
    try {
        await db.query('BEGIN');
        const values = [
            roleId,
            unitId,
            branchId,
            departmentId,
            jobNickname,
            jobDescription,
            entryDate, 
            yearsInSeniority, 
            shouldHaveDamach, 
            req.user,
            `${contactInformation.fullName} ${contactInformation.phoneNumber}`, 
            baseLocationId, 
        ];
        const advertisementId = await db.query(`
            INSERT INTO jobs.advertisements (
                role_id,
                unit_id,
                branch_id,
                department_id,
                job_title,
                job_description,
                entry_date,
                seniority,
                is_damach,
                advertiser_upn,
                contact,
                base_location_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
            RETURNING id
        `,
                values
            )
            .then((result) => result.rows[0].id);

        for (const standardId of standardIds) {
            await db.query(
                `
                INSERT INTO jobs.standards_of_ads (
                    advertisement_id, standard_id 
                ) VALUES ($1, $2)
            `,
                [advertisementId, standardId]
            );
        }

        await db.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        console.log('Error is ' + error);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});

router.put('/toggle-is-close/:id/:is_close', async (req, res) => {
    const { id, is_close } = req.params;

    const { rows } = await db.query(
        `
            UPDATE jobs.advertisements ads
            SET is_close=$1
            WHERE ads.id=$2
        `,
        [is_close, id]
    );
    res.json(rows[0]);
});

module.exports = router;
router.get('/roles', async (req, res) => {
    try {
        const { rows } = await db.query(
            `
                SELECT *
                FROM jobs.roles
            `
        );

        console.log(`all roles were successfully queried`);
        res.status(200);
        res.json(rows);
    } catch (error) {
        console.error(`an error occured when trying to query all application roles`, error);
        res.status(500);
    }
});

module.exports = router;
