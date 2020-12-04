const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');

const router = express.Router();

router
  .get('/', appointmentsController.getAllAppointments)
  .get('/:id', appointmentsController.getAppointmentById)
  .post('/', appointmentsController.createAppointment)
  .put('/:id', appointmentsController.updateAppointment)
  .delete('/:id', appointmentsController.deleteAppointment);

module.exports = router;
