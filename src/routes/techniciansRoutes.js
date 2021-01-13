const express = require('express');
const techniciansController = require('../controllers/techniciansController');
const { validateBody, validateParam } = require('../utils/validations');
const schema = require('../utils/validationSchemas');
const authMiddleWare = require('../utils/authMiddleWare');

const router = express.Router();

router
  .get('/', authMiddleWare, techniciansController.getAllTechnicians)
  .get('/:id', validateParam(schema.idSchema, 'id'), authMiddleWare, techniciansController.getTechnicianById)
  .post('/', validateBody(schema.techniciansSchema), authMiddleWare, techniciansController.createTechnician)
  .put('/:id', validateParam(schema.idSchema, 'id'), validateBody(schema.techniciansSchema), authMiddleWare, techniciansController.updateTechnician)
  .delete('/:id', validateParam(schema.idSchema, 'id'), authMiddleWare, techniciansController.deleteTechnician);

module.exports = router;
