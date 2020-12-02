const express = require('express');
const boilersRoutes = require('./boilersRoutes');
const buildingsRoutes = require('./buildingsRoutes');
const techniciansRoutes = require('./techniciansRoutes');
const boilerTypesRoutes = require('./boilerTypesRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');
const companiesRoutes = require('./companiesRoutes');

const router = express.Router();

router
  .use('/boilers', boilersRoutes)
  .use('/buildings', buildingsRoutes)
  .use('/technicians', techniciansRoutes)
  .use('/boilerTypes', boilerTypesRoutes)
  .use('/appointments', appointmentsRoutes)
  .use('/companies', companiesRoutes);

module.exports = router;
