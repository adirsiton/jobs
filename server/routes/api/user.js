// require('dotenv').config();
const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
    const { upn } = req.params;

    const { rows } = await db.query(`
        SELECT  upn, display_name,last_entrance, phone_number,
            roles.name as role_name, ranks.name as rank_name
        FROM jobs.users users
        LEFT JOIN jobs.standards ranks on users.rank_id = ranks.id
        LEFT JOIN jobs.roles roles on users.role_id = roles.id
        WHERE upn =  $1`,
        [upn]);

    res.json(rows);
});

router.get('/favorite', async (req, res) => {
    const userId = req.user;

    const { rows } = await db.query(`
    SELECT array_agg(fav.advertisement_id) as favorite_ads
    FROM jobs.users users
    LEFT JOIN jobs.favorite_ads_of_users fav ON fav.upn=$1
    LEFT JOIN jobs.advertisements ads ON ads.id=fav.advertisement_id
    where users.upn=$1 AND ads.is_close=false;`,
        [userId]);

    // removing null
    const { favorite_ads } = rows[0];
    const favoriteAds = favorite_ads === null ? [] : favorite_ads;

    res.json(favoriteAds);
});

router.post('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.user;

    const { rows } = await db.query(`
        INSERT INTO jobs.favorite_ads_of_users(upn, advertisement_id)
        VALUES ($1, $2);`,
        [userId, id]);
    res.json(rows);
});

router.post('/', async (req, res) => {
    const userDetails = req.body;

    const { upn, rankId, job, phone_number, jobs } = userDetails

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
    } catch (error) {
        console.log("Error is " + error);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});

router.delete('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.user;
    const { rows } = await db.query(`
        DELETE FROM jobs.favorite_ads_of_users
        WHERE upn=$1 AND advertisement_id=$2;`,
        [userId, id]);
    res.json(rows);
});

router.get('/ramad-ads', async (req, res) => {
    const userUpn = req.user;

    const { rows } = await db.query(`
    SELECT json_build_object(
        'id', ads.id,
        'name', job_title,
        'isClosed',is_close,
        'role', json_build_object(
            'id', roles.id,
            'name', roles.name,
            'color', roles.color,
            'initials', roles.initials
        ),
        'candidates', json_agg(json_build_object(
            'upn', users.upn,
            'name', users.display_name,
            'phoneNumber', users.phone_number
        )))  as ramad_ad
    FROM jobs.advertisements ads
    JOIN jobs.roles roles ON ads.role_id=roles.id
    LEFT JOIN jobs.favorite_ads_of_users favorite ON favorite.advertisement_id=ads.id
    LEFT JOIN jobs.users users ON users.upn=favorite.upn
    WHERE ads.advertiser_upn=$1
    GROUP BY ads.id, job_title, is_close, roles.id, roles.name, roles.color, roles.initials;`,
    [userUpn]);

    res.json(rows);
});

module.exports = router;