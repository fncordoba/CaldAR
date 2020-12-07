const express = require('express');
const buildingController = require('../controllers/buildingsController');
const schemas = require('../utils/validationSchemas');
const { validateBody, validateParams } = require('../utils/validations');

const router = express.Router();

router
  .get('/', buildingController.getAllBuildings)
  .get('/:id', validateParams(schemas.idSchema, 'id'), buildingController.getBuildingById)
  .post('/', validateBody(schemas.buildingSchema), buildingController.createBuilding)
  .put('/:id', [validateBody(schemas.buildingSchema), validateParams(schemas.idSchema, 'id')], buildingController.updateBuilding)
  .delete('/:id', validateParams(schemas.idSchema, 'id'), buildingController.deleteBuilding);

module.exports = router;
