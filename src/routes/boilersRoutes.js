const express = require('express');
const boilersController = require('../controllers/boilersController');

const router = express.Router();

router.get('/', boilersController.getAllBoilers);

module.exports = router;
