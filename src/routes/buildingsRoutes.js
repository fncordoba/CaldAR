const express = require('express');
const buildingController = require('../controllers/buildingsController');
const schemas = require('../utils/validationSchemas');
const { validateBody, validateParam } = require('../utils/validations');

const router = express.Router();

router
  .get('/', buildingController.getAllBuildings)
  .get('/:id', validateParam(schemas.idSchema, 'id'), buildingController.getBuildingById)
  .post('/', validateBody(schemas.buildingSchema), buildingController.createBuilding)
  .put('/:id', [validateBody(schemas.buildingSchema), validateParam(schemas.idSchema, 'id')], buildingController.updateBuilding)
  .delete('/:id', validateParam(schemas.idSchema, 'id'), buildingController.deleteBuilding);

module.exports = router;
