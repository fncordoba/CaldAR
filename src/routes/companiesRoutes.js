const express = require('express');
const companiesController = require('../controllers/companiesController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .route('/')
  .get(companiesController.getAllCompanies)
  .post(validateBody(schemas.companiesSchema), companiesController.createCompany);

router
  .route('/:id')
  .get(validateParam(schemas.idSchema, 'id'), companiesController.getCompanyById)
  .put(
    [
      validateParam(schemas.idSchema, 'id'),
      validateBody(schemas.companiesSchema)
    ],
    companiesController.updateCompany
  )
  .delete(validateParam(schemas.idSchema, 'id'), companiesController.deleteCompany);

module.exports = router;
