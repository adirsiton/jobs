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

module.exports = router;