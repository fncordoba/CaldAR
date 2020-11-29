const express = require('express');
const buildingController = require('../controllers/buildingsController');

const router = express.Router();

router.get('/', buildingController.getAllBuildings);

module.exports = router;
