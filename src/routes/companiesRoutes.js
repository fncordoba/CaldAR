const express = require('express');
const companiesController = require('../controllers/companiesController');

const router = express.Router();

router
  .get('/', companiesController.getAllCompanies)
  .get('/:id', companiesController.getCompanyById)
  .post('/', companiesController.createCompany)
  .put('/:id', companiesController.updateCompany)
  .delete('/:id', companiesController.deleteCompany);

module.exports = router;
