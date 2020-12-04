const express = require('express');
const buildingController = require('../controllers/buildingsController');

const router = express.Router();

router
  .get('/', buildingController.getAllBuildings)
  .get('/:id', buildingController.getBuildingById)
  .post('/', buildingController.createBuilding)
  .put('/:id', buildingController.updateBuilding)
  .delete('/:id', buildingController.deleteBuilding);

module.exports = router;
