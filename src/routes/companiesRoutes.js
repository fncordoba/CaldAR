const express = require('express');
const companiesController = require('../controllers/companiesController');

const router = express.Router();

// CREATE COMPANY
router.post('/', companiesController.createCompany);

// FIND ALL COMPANIES
router.get('/', companiesController.findAllCompanies);

// GET COMPANIES BY ID
router.get('/:id', companiesController.companyById);

// UPDATING COMPANY BY ID
router.put('/:id', companiesController.updateCompany);

module.exports = router;
