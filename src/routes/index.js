const express = require('express');
const boilersRoutes = require('./boilersRoutes');

const router = express.Router();

router.use('/boilers', boilersRoutes);

module.exports = router;
