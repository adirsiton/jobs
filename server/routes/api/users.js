const express = require('express');
const db = require('../../db');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    const userDetails = req.body;

    const {upn, rankId, job, phone_number, jobs} = userDetails

    try {
        await db.query('BEGIN');
        const values = [upn, rankId, role_id, phone_number, jobs]; // can remove field from json????
        const userUpn = await db.query(`
            UPDATE jobs.users (
                rank_id, role_id, phoneNumber ) 
            VALUES ($2, $3, $4, $5) 
            WHERE upn = $1
            RETURNING upn
        `, values).then(result => result.rows[0].upn);
        
      
        for (const job of jobs) {
            // const {jobName, unitId, branchId, departmentId, startDate, endDate} /// job ????
            await db.query(`
            INSERT INTO jobs.users_previous_jobs(
                 upn, job_name, unit_id, branch_id, department_id, start_date, end_date)  
             VALUES ($1, $2, $3, $4, $5) 
            `, [userUpn, ...job]);
        }

        await db.query('COMMIT');
        res.sendStatus(200);
    } catch(error) {
        console.log("Error is " + error);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});


module.exports = router;