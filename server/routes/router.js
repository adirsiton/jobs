const express = require('express');
const loginRouter = require('./auth/auth');
const adsRouter = require('./api/ads');

const router = express.Router();

router.use("/", loginRouter);
router.use("/ads" , adsRouter);

module.exports = router;