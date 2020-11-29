const express = require('express');
const boilersRoutes = require('./boilersRoutes');
const buildingsRoutes = require('./buildingsRoutes');

const router = express.Router();

router.use('/boilers', boilersRoutes);
router.use('/buildings', buildingsRoutes);

module.exports = router;
