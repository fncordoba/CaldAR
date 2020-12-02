const express = require('express');
const companiesController = require('../controllers/companiesController');

const router = express.Router();

router
  .get('/', companiesController.findAllCompanies)
  .get('/:id', companiesController.companyById)
  .post('/', companiesController.createCompany)
  .put('/:id', companiesController.updateCompany)
  .delete('/:id', companiesController.deleteCompany);

module.exports = router;
