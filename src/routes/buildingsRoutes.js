const express = require('express');
const buildingController = require('../controllers/buildingsController');
const { buildingSchema } = require('../utils/validationSchemas');
const { validateBody, validateParams } = require('../utils/validations');

const router = express.Router();

router
  .get('/', buildingController.getAllBuildings)
  .get('/:id', validateParams(buildingSchema, 'id'), buildingController.getBuildingById)
  .post('/', validateBody(buildingSchema), buildingController.createBuilding)
  .put('/:id', validateParams(buildingSchema, 'id'), buildingController.updateBuilding)
  .delete('/:id', validateParams(buildingSchema, 'id'), buildingController.deleteBuilding);

module.exports = router;
