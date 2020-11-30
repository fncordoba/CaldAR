const express = require('express');
const boilersController = require('../controllers/boilersController');

const router = express.Router();

router.get('/', boilersController.findAllBoilers);
router.post('/', boilersController.createBoiler);

module.exports = router;
