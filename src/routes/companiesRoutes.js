const express = require('express');
const companiesController = require('../controllers/companiesController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', validateBody(schemas.companiesSchema), validateParam(schemas.companiesSchema), companiesController.getAllCompanies)
  .get('/:id', validateBody(schemas.companiesSchema), validateParam(schemas.companiesSchema), companiesController.getCompanyById)
  .post('/', validateBody(schemas.companiesSchema), validateParam(schemas.companiesSchema), companiesController.createCompany)
  .put('/:id', validateBody(schemas.companiesSchema), validateParam(schemas.companiesSchema), companiesController.updateCompany)
  .delete('/:id', validateBody(schemas.companiesSchema), validateParam(schemas.companiesSchema), companiesController.deleteCompany);

module.exports = router;
