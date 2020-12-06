const express = require('express');
const boilersController = require('../controllers/boilersController');
const {
  validateBody,
  validateParam
} = require('../utils/validations');
const {
  boilersSchema,
  idSchema
} = require('../utils/validationSchemas');

const router = express.Router();

router
  .route('/')
  .get(boilersController.getAllBoilers)
  .post(validateBody(boilersSchema), boilersController.createBoiler);

router
  .route('/:id')
  .get(validateParam(idSchema, 'id'), boilersController.getBoilerById)
  .put(
    [
      validateParam(idSchema, 'id'),
      validateBody(boilersSchema)
    ],
    boilersController.updateBoiler
  )
  .delete(validateParam(idSchema, 'id'), boilersController.deleteBoiler);

module.exports = router;
