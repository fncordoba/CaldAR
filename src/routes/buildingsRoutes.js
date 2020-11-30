const express = require('express');
const buildingController = require('../controllers/buildingsController');

const router = express.Router();

// GET ALL BUILDINGS
router.get('/', buildingController.getAllBuildings);

// CREATE BUILDING
router.post('/', buildingController.createBuilding);

module.exports = router;
