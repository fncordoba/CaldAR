const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');
const { validateBody, validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', boilerTypesController.getAllBoilerTypes)
  .get(
    '/:id', validateParam(schemas.idSchema, 'id'),
    boilerTypesController.getBoilerTypeById,
  )
  .post(
    '/',
    validateBody(schemas.boilerTypesSchema),
    boilerTypesController.createBoilerType
  )
  .put(
    '/:id',
    validateBody(schemas.boilerTypesSchema),
    validateParam(schemas.idSchema, 'id'),
    boilerTypesController.updateBoilerType
  )
  .delete(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    boilerTypesController.deleteBoilerTypeById
  );

module.exports = router;
