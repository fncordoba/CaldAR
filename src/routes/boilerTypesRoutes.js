const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');
const { validateBody, validateParam } = require('../utils/validations');
const authMiddleWare = require('../utils/authMiddleWare');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', authMiddleWare, boilerTypesController.getAllBoilerTypes)
  .get(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    boilerTypesController.getBoilerTypeById,
  )
  .post(
    '/',
    validateBody(schemas.boilerTypesSchema),
    authMiddleWare,
    boilerTypesController.createBoilerType
  )
  .put(
    '/:id',
    validateBody(schemas.boilerTypesSchema),
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    boilerTypesController.updateBoilerType
  )
  .delete(
    '/:id',
    validateParam(schemas.idSchema, 'id'),
    authMiddleWare,
    boilerTypesController.deleteBoilerTypeById
  );

module.exports = router;
