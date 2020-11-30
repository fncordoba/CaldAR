const express = require('express');
const boilersController = require('../controllers/boilersController');

const router = express.Router();

router.get('/', boilersController.findAllBoilers);
router.post('/', boilersController.createBoiler);
router.get('/:id', boilersController.findBoilerById);
router.put('/:id', boilersController.updateBoilerById);
router.delete('/:id', boilersController.deleteBoilerById);

module.exports = router;
