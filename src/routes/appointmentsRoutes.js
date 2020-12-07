const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/',
    appointmentsController.getAllAppointments)
  .get(
    '/:id', validateParam(schemas.idSchema, 'id'),
    appointmentsController.getAppointmentById
  )
  .post(
    '/',
    validateBody(schemas.appointmentsSchema),
    appointmentsController.createAppointment
  )
  .put(
    '/:id',
    validateBody(schemas.appointmentsSchema),
    validateParam(schemas.idSchema, 'id'),
    appointmentsController.updateAppointment
  )
  .delete(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    appointmentsController.deleteAppointment
  );

module.exports = router;
