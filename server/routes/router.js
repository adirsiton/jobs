const express = require('express');
const adsRouter = require('./api/ads');
const userRouter = require('./api/user');

const router = express.Router();

router.use("/ads" , adsRouter);
router.use("/user" , userRouter);

module.exports = router;