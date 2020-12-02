const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');

const router = express.Router();

router
  .get('/', appointmentsController.findAll)
  .get('/:id', appointmentsController.findById)
  .post('/', appointmentsController.createAppointment)
  .put('/:id', appointmentsController.updateAppointmentById)
  .delete('/:id', appointmentsController.deleteAppointmentById);

module.exports = router;
