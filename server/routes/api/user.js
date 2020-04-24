// require('dotenv').config();
const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/favorite', async (req, res) => {
    const userId = req.user;
    
    const { rows } = await db.query(`
    SELECT array_agg(favorite_ads_of_users.advertisement_id) as favorite_ads
    FROM jobs.users users
    LEFT JOIN jobs.favorite_ads_of_users favorite_ads_of_users ON favorite_ads_of_users.upn=$1
    where users.upn=$1;`,
    [userId]);

    // removing null
    const { favorite_ads } = rows[0];
    const favoriteAds = favorite_ads[0] === null? [] : favorite_ads;

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

router.delete('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.user;
    const { rows } = await db.query(`
        DELETE FROM jobs.favorite_ads_of_users
        WHERE upn=$1 AND advertisement_id=$2;`,
    [userId, id]);
    res.json(rows);
});

module.exports = router;