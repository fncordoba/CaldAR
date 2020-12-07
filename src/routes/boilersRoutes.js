const express = require('express');
const boilersController = require('../controllers/boilersController');
const { validateBody, validateParam } = require('../utils/validations');
const { boilersSchema, idSchema } = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', boilersController.getAllBoilers)
  .get('/:id', validateParam(idSchema, 'id'), boilersController.getBoilerById)
  .post('/', validateBody(boilersSchema), boilersController.createBoiler)
  .put('/:id', [validateParam(idSchema, 'id'), validateBody(boilersSchema)], boilersController.updateBoiler)
  .delete('/:id', validateParam(idSchema, 'id'), boilersController.deleteBoiler);

module.exports = router;
