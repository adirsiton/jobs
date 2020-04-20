require('dotenv').config();
const express = require('express');
const db = require('../../db');

const router = express.Router();

// It's the server responsibility to identify the client,
// for now the client will be identified by the '.env'
const CLIENT_UPN = process.env.CLIENT_UPN || 's8182384';

router.get('/', async (req, res) => {
    const { rows } = await db.query(`
    SELECT users.upn, display_name as name, array_agg(favorite_ads_of_users.advertisement_id) as favorite_ads
    FROM jobs.users users
    JOIN jobs.favorite_ads_of_users favorite_ads_of_users ON favorite_ads_of_users.upn = 's8182384'
    where users.upn = $1
    GROUP BY users.upn, display_name`, [CLIENT_UPN]);
    res.json(rows);
});

module.exports = router;