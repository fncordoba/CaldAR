const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');

const router = express.Router();

router
  .get('/', boilerTypesController.getAllBoilerTypes)
  .get('/:id', boilerTypesController.getBoilerTypeById)
  .post('/', boilerTypesController.createBoilerType)
  .put('/:id', boilerTypesController.updateBoilerTypeById)
  .delete('/:id', boilerTypesController.deleteBoilerTypeById);

module.exports = router;
