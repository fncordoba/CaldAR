const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: 'the router is working!',
  });
});

module.exports = router;
