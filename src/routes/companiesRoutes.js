const express = require('express');
const companiesController = require('../controllers/companiesController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', companiesController.getAllCompanies)
  .post('/', validateBody(schemas.companiesSchema), companiesController.createCompany)
  .get('/:id', validateParam(schemas.idSchema, 'id'), companiesController.getCompanyById)
  .put('/:id', validateParam(schemas.idSchema, 'id'), validateBody(schemas.companiesSchema), companiesController.updateCompany)
  .delete('/:id', validateParam(schemas.idSchema, 'id'), companiesController.deleteCompany);

module.exports = router;
