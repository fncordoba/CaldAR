const express = require('express');
const boilersRoutes = require('./boilersRoutes');
const buildingsRoutes = require('./buildingsRoutes');
const techniciansRoutes = require('./techniciansRoutes');
const boilerTypesRoutes = require('./boilerTypesRoutes');

const router = express.Router();

router.use('/boilers', boilersRoutes);
router.use('/buildings', buildingsRoutes);
router.use('/technicians', techniciansRoutes);
router.use('/boilerTypes', boilerTypesRoutes);

module.exports = router;
