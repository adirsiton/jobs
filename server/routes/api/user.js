// require('dotenv').config();
const express = require('express');
const db = require('../../db');

const router = express.Router();

router.post('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.session.passport.user; // req.user
    
    const { rows } = await db.query(`
    INSERT INTO jobs.favorite_ads_of_users(upn, advertisement_id)
        VALUES ($1, $2);`,
    [userId, id]);
    res.json(rows);
});

router.delete('/favorite/:id', async (req, res) => {
    const { id } = req.params;

    const userId = req.session.passport.user;
    const { rows } = await db.query(`
    DELETE FROM jobs.favorite_ads_of_users
    WHERE upn=$1 AND advertisement_id=$2;`,
    [userId, id]);

    res.json(rows);
});

module.exports = router;