const express = require('express');
const buildingController = require('../controllers/buildingsController');
const schemas = require('../utils/validationSchemas');
const { validateBody, validateParam } = require('../utils/validations');
const authMiddleWare = require('../utils/authMiddleWare');

const router = express.Router();

router
  .get('/', authMiddleWare, buildingController.getAllBuildings)
  .get('/:id', validateParam(schemas.idSchema, 'id'), authMiddleWare, buildingController.getBuildingById)
  .post('/', validateBody(schemas.buildingSchema), authMiddleWare, buildingController.createBuilding)
  .put('/:id', [validateBody(schemas.buildingSchema), validateParam(schemas.idSchema, 'id')], authMiddleWare, buildingController.updateBuilding)
  .delete('/:id', validateParam(schemas.idSchema, 'id'), authMiddleWare, buildingController.deleteBuilding);

module.exports = router;
