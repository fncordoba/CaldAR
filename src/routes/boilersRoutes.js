const express = require('express');
const boilersController = require('../controllers/boilersController');
const {
  validateBody,
  validateParam
} = require('../utils/validations');
const boilersSchema = require('../utils/validationSchemas');

const router = express.Router();

router
  .route('/')
  .get(boilersController.getAllBoilers)
  .post(validateBody(boilersSchema), boilersController.createBoiler);

router
  .route('/:id')
  .get(validateParam(boilersSchema), boilersController.getBoilerById)
  .put(
    [
      validateParam(boilersSchema),
      validateBody(boilersSchema)
    ],
    boilersController.updateBoiler
  )
  .delete(validateParam(boilersSchema), boilersController.deleteBoiler);

module.exports = router;
