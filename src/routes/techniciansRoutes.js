const express = require('express');
const techniciansController = require('../controllers/techniciansController');

const router = express.Router();

router.get('/', techniciansController.getAllTechnicians);
router.post('/', techniciansController.createTechnician);
router.get('/:id', techniciansController.findTechnicianById);
router.put('/:id', techniciansController.updateTechnician);
router.delete('/:id', techniciansController.deleteTechnician);
module.exports = router;
