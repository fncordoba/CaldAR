const express = require('express');
const boilersController = require('../controllers/boilersController');

const router = express.Router();

router
  .get('/', boilersController.findAllBoilers)
  .get('/:id', boilersController.findBoilerById)
  .post('/', boilersController.createBoiler)
  .put('/:id', boilersController.updateBoilerById)
  .delete('/:id', boilersController.deleteBoilerById);

module.exports = router;
