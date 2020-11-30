const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');

const router = express.Router();

router.get('/', boilerTypesController.getAllBoilerTypes);

module.exports = router;
