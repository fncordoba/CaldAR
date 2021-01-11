const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');
const { validateBody, validateParam } = require('../utils/validations');
const authMiddleWare = require('../utils/authMiddleWare');
const schemas = require('../utils/validationSchemas');


const router = express.Router();

router
  .get('/', authMiddleWare, boilerTypesController.getAllBoilerTypes)
  .get(
    '/:id', authMiddleWare,
    validateParam(schemas.idSchema, 'id'),
    boilerTypesController.getBoilerTypeById,
  )
  .post(
    '/',
    authMiddleWare,
    validateBody(schemas.boilerTypesSchema),
    boilerTypesController.createBoilerType
  )
  .put(
    '/:id',
    authMiddleWare,
    validateBody(schemas.boilerTypesSchema),
    validateParam(schemas.idSchema, 'id'),
    boilerTypesController.updateBoilerType
  )
  .delete(
    '/:id',
    authMiddleWare,
    validateParam(schemas.idSchema, 'id'),
    boilerTypesController.deleteBoilerTypeById
  );

module.exports = router;
