// require('dotenv').config();
const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
    const { upn } = req.params;

    const { rows } = await db.query(
        `
            SELECT  upn, display_name,last_entrance, phone_number,
                roles.name as role_name, ranks.name as rank_name
            FROM jobs.users users
            LEFT JOIN jobs.standards ranks on users.rank_id = ranks.id
            LEFT JOIN jobs.roles roles on users.role_id = roles.id
            WHERE upn =  $1
        `,
        [upn]
    );

    res.json(rows);
});

router.get('/favorite', async (req, res) => {
    const userId = req.user;

    const { rows } = await db.query(
        `
            SELECT array_agg(favorite_ads_of_users.advertisement_id) as favorite_ads
            FROM jobs.users users
            LEFT JOIN jobs.favorite_ads_of_users favorite_ads_of_users ON favorite_ads_of_users.upn=$1
            where users.upn=$1;
        `,
        [userId]
    );

    // removing null
    const { favorite_ads } = rows[0];
    const favoriteAds = favorite_ads[0] === null ? [] : favorite_ads;

    res.json(favoriteAds);
});

router.post('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.user;

    const { rows } = await db.query(
        `
            INSERT INTO jobs.favorite_ads_of_users(upn, advertisement_id)
            VALUES ($1, $2);
        `,
        [userId, id]
    );
    res.json(rows);
});

router.post('/resume', async (req, res) => {
    const userDetails = req.body;

    const {
        upn,
        selectedRankId: rankId,
        selectedRoleId: currentRoleId,
        nextRoles: desiredRoleIds,
        aboutMe: freeText,
        phoneNumber,
        previousJobs,
    } = userDetails;
    try {
        await db.query('BEGIN');
        await db.query(
            `
                INSERT INTO jobs.users_resume (upn, rank_id, current_role_id, free_text, phone_number) 
                VALUES ($1, $2, $3, $4, $5) 
            `,
            [upn, rankId, currentRoleId, freeText, phoneNumber]
        );

        for (const job of previousJobs) {
            const {
                jobName,
                unitId,
                branchId,
                departmentId,
                startDate,
                endDate,
            } = job;
            await db.query(
                `
                    INSERT INTO jobs.users_previous_jobs(upn, job_name, unit_id, branch_id,
                                                        department_id, start_date, end_date)  
                    VALUES ($1, $2, $3, $4, $5, $6, $7) 
                `,
                [
                    upn,
                    jobName,
                    unitId,
                    branchId,
                    departmentId,
                    startDate,
                    endDate,
                ]
            );
        }

        for (const desiredRoleId of desiredRoleIds) {
            await db.query(
                `
                    INSERT INTO jobs.users_desired_roles(upn, desired_role_id)  
                    VALUES ($1, $2) 
                    ON CONFLICT (upn, desired_role_id) DO UPDATE
                    SET desired_role_id = $2
                `,
                [upn, desiredRoleId]
            );
        }

        await db.query('COMMIT');
        console.log(`successfully added resume for user: ${upn}`);
        res.sendStatus(200);
    } catch (error) {
        console.error(
            `An error occured while trying to add resume to user: ${upn}`,
            error
        );
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});

router.delete('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.user;
    const { rows } = await db.query(
        `
            DELETE FROM jobs.favorite_ads_of_users
            WHERE upn=$1 AND advertisement_id=$2;
        `,
        [userId, id]
    );
    res.json(rows);
});

router.get('/ramad-ads', async (req, res) => {
    const userUpn = req.user;

    const { rows } = await db.query(
        `
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
            GROUP BY ads.id, job_title, is_close, roles.id, roles.name, roles.color, roles.initials;
        `,
        [userUpn]
    );

    res.json(rows);
});

module.exports = router;
