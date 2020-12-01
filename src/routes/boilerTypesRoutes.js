const express = require('express');
const boilerTypesController = require('../controllers/boilerTypesController');

const router = express.Router();

router.get('/', boilerTypesController.getAllBoilerTypes);
router.get('/:id', boilerTypesController.getBoilerTypeById);
router.post('/', boilerTypesController.createBoilerType);
router.put('/:id', boilerTypesController.updateBoilerTypeById);
router.delete('/:id', boilerTypesController.deleteBoilerTypeById);

module.exports = router;
