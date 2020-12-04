const express = require('express');
const techniciansController = require('../controllers/techniciansController');

const router = express.Router();

router
  .get('/', techniciansController.getAllTechnicians)
  .get('/:id', techniciansController.getTechnicianById)
  .post('/', techniciansController.createTechnician)
  .put('/:id', techniciansController.updateTechnician)
  .delete('/:id', techniciansController.deleteTechnician);

module.exports = router;
