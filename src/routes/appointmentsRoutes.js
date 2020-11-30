const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');

const router = express.Router();

// FIND ALL APPOINTMENTS
router.get('/', appointmentsController.findAll);

// CREATE APPOINTMENTS
router.post('/', appointmentsController.createAppointment);

module.exports = router;
