const express = require('express');
const companiesController = require('../controllers/companiesController');

const router = express.Router();

// CREATE BUILDING
router.post('/', companiesController.createCompany);

module.exports = router;
