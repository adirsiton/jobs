const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM advertisements');
     res.send(rows)
});


module.exports = router;