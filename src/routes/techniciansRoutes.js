const express = require('express');
const techniciansController = require('../controllers/techniciansController');

const router = express.Router();

router.get('/', techniciansController.getAllTechnicians);
router.post('/', techniciansController.createTechnician);

module.exports = router;
