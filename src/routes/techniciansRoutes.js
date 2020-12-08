const express = require('express');
const techniciansController = require('../controllers/techniciansController');
const { validateBody, validateParam } = require('../utils/validations');
const schema = require('../utils/validationSchemas');

const router = express.Router();

router
  .get('/', techniciansController.getAllTechnicians)
  .get('/:id', validateParam(schema.idSchema, 'id'), techniciansController.getTechnicianById)
  .post('/', validateBody(schema.techniciansSchema), techniciansController.createTechnician)
  .put('/:id', validateParam(schema.idSchema, 'id'), validateBody(schema.techniciansSchema), techniciansController.updateTechnician)
  .delete('/:id', validateParam(schema.idSchema, 'id'), techniciansController.deleteTechnician);

module.exports = router;
