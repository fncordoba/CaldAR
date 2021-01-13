const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');
const authMiddleWare = require('../utils/authMiddleWare');

const router = express.Router();

router
  .get('/',
    authMiddleWare,
    appointmentsController.getAllAppointments)
  .get(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    appointmentsController.getAppointmentById
  )
  .post(
    '/',
    validateBody(schemas.appointmentsSchema),
    authMiddleWare,
    appointmentsController.createAppointment
  )
  .put(
    '/:id',
    validateBody(schemas.appointmentsSchema),
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    appointmentsController.updateAppointment
  )
  .delete(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    appointmentsController.deleteAppointment
  );

module.exports = router;
