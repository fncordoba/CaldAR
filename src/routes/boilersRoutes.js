const express = require('express');
const boilersController = require('../controllers/boilersController');

const router = express.Router();

router
  .get('/', boilersController.getAllBoilers)
  .get('/:id', boilersController.getBoilerById)
  .post('/', boilersController.createBoiler)
  .put('/:id', boilersController.updateBoiler)
  .delete('/:id', boilersController.deleteBoiler);

module.exports = router;
