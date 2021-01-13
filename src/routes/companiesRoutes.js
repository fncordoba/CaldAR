const express = require('express');
const companiesController = require('../controllers/companiesController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');
const authMiddleWare = require('../utils/authMiddleWare');

const router = express.Router();

router
  .get('/', authMiddleWare, companiesController.getAllCompanies)
  .post('/', validateBody(schemas.companiesSchema), authMiddleWare, companiesController.createCompany)
  .get('/:id', validateParam(schemas.idSchema, 'id'), authMiddleWare, companiesController.getCompanyById)
  .put('/:id', validateParam(schemas.idSchema, 'id'), validateBody(schemas.companiesSchema), authMiddleWare, companiesController.updateCompany)
  .delete('/:id', validateParam(schemas.idSchema, 'id'), authMiddleWare, companiesController.deleteCompany);

module.exports = router;
