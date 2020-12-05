const express = require('express');
const boilersController = require('../controllers/boilersController');
const {
  validateBody,
  validateParam,
  // validateBoilerType,
  // validateRemove
} = require('../utils/validations');
const {
  boilersSchema,
  idSchema
} = require('../utils/validationSchemas');

const router = express.Router();

router
  .route('/')
  .get(boilersController.getAllBoilers)
  .post([
    validateBody(boilersSchema),
    // validateBoilerType()
  ],
  boilersController.createBoiler);

router
  .route('/:id')
  .get(validateParam(idSchema, 'id'), boilersController.getBoilerById)
  .put(
    [
      validateParam(idSchema, 'id'),
      validateBody(boilersSchema),
      // validateBoilerType()
    ],
    boilersController.updateBoiler
  )
  .delete([
    validateParam(idSchema, 'id'),
    // validateRemove()
  ],
  boilersController.deleteBoiler);

module.exports = router;
