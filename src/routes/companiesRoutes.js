const express = require('express');
const companiesController = require('../controllers/companiesController');

const router = express.Router();

// CREATE COMPANY
router.post('/', companiesController.createCompany);

module.exports = router;
