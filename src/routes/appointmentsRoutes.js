const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');

const router = express.Router();

router.get('/', appointmentsController.findAll);

module.exports = router;
