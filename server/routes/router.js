const express = require('express');
const adsRouter = require('./api/ads');
const usersRouter = require('./api/users');

const router = express.Router();

router.use("/ads" , adsRouter);
router.use("/users" , usersRouter);

module.exports = router;