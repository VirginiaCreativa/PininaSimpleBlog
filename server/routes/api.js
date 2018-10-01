const express = require('express');

const router = express.Router();
const dataSignificados = require('../../src/assets/data/signficados.json');
const dataBlog = require('../../src/assets/data/blog.json');

router.get('/significados', (req, res) => {
  res.send(dataSignificados);
});
router.get('/blog', (req, res) => {
  res.send(dataBlog);
});

module.exports = router;
