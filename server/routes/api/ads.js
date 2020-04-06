const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
    const { rows } = await db.query(`
        SELECT ads.*, roles.name as role_name, units.name as unit_name, departments.name  as department_name, 
		branches.name as branch_name, locations.name as location, users.display_name advertiser, tags.name tag, tags.color tag_color,
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
        JOIN jobs.tags tags ON ads.tag_id=tags.id`);
    res.send(rows);
});

// Method assumes that every name is unique!! As this is how the DB is
const mapUniqueNamesToIds = async (uniqueNames) => {
    const {
        baseLocation,
        departmentData,
        role,
        standards,
    } = uniqueNames;

    const roleId = await db.query(`
        SELECT id
        FROM jobs.roles
        WHERE name = ${role}
    `).rows[0];

    const baseLocationId = await db.query(`
        SELECT id
        FROM jobs.base_locations
        WHERE name = ${baseLocation}
    `).rows[0];

    const unitId = await db.query(`
        SELECT id
        FROM jobs.units
        WHERE name = ${departmentData.unit}
    `).rows[0];

    const branchId = await db.query(`
        SELECT id
        FROM jobs.branches
        WHERE name = ${departmentData.branch} AND unit_id = ${unitId}
    `).rows[0];

    const departmentId = await db.query(`
        SELECT id
        FROM jobs.departments
        WHERE name = ${departmentData.department} AND branch_id = ${branchId}
    `).rows[0];

    console.log(
        {
            baseLocationId,
            roleId,
            unitId,
            branchId,
            departmentId
        }
    );

    return {
        baseLocationId,
        roleId,
        unitId,
        branchId,
        departmentId
    };
}

router.post('/', async (req, res) => {
    console.log(req.body);
    const ads = req.body;
    const { baseLocation, departmentData, jobNickname, role,
            standards, entryDate, yearsInSeniority, shouldHaveDamach, 
            jobDescription, contactInformation} = ads;
    
    try {
        const {
            baseLocationId,
            roleId,
            unitId,
            branchId,
            departmentId
        } = await mapUniqueNamesToIds({
            baseLocation,
            departmentData,
            role,
            standards,
        }); 

        // TODO: (Fix both)
        advertiser_upn = '';
        // contactInformation = '';

        // await db.query(`
        //     INSERT INTO jobs.advertisements (
        //         role_id, unit_id, branch_id, department_id, job_name,
        //         description, entry_date, seniority, is_damach, advertiser_upn, 
        //         contact, base_location_id
        //     ) VALUES (
        //         ${roleId}, ${unitId}, ${branchId}, ${departmentId}, ${jobNickname}, 
        //         ${jobDescription}, ${entryDate}, ${yearsInSeniority}, ${shouldHaveDamach}, ${advertiser_upn}, 
        //         ${contactInformation.fullName}, ${baseLocationId}
        //     )
        // `);
    } catch(error) {
        console.log("Error is " + error);
    }

    // TODO: Insert standards...
});

module.exports = router;