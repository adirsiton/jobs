const express = require('express');
const adsRouter = require('./api/ads');

const router = express.Router();

router.use("/ads" , adsRouter);

module.exports = router;