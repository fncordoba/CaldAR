const express = require('express');
const boilersController = require('../controllers/boilersController');
const { validateBody, validateParam } = require('../utils/validations');
const { boilersSchema, idSchema } = require('../utils/validationSchemas');
const authMiddleWare = require('../utils/authMiddleWare');

const router = express.Router();

router
  .get('/', authMiddleWare, boilersController.getAllBoilers)
  .get('/:id', validateParam(idSchema, 'id'), authMiddleWare, boilersController.getBoilerById)
  .post('/', validateBody(boilersSchema), authMiddleWare, boilersController.createBoiler)
  .put('/:id', [validateParam(idSchema, 'id'), validateBody(boilersSchema)], authMiddleWare, boilersController.updateBoiler)
  .delete('/:id', validateParam(idSchema, 'id'), authMiddleWare, boilersController.deleteBoiler);

module.exports = router;
