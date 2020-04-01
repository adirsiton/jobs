const express = require('express');
const router = express.Router();
const loginRouter = require('./auth/auth');
const adsRouter = require('./api/ads');

router.use("/", loginRouter);
router.use("/ads" , adsRouter);



module.exports = router;