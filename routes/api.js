const express = require('express');

const router = express.Router();
const dataTeaching = require('../src/assets/data/teaching.json');
const dataLifeStyle = require('../src/assets/data/lifestyle.json');

router.get('/teaching', (req, res) => {
  res.send(dataTeaching);
});
router.get('/lifestyle', (req, res) => {
  res.send(dataLifeStyle);
});

module.exports = router;
