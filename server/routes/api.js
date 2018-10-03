const express = require('express');
const fs = require('fs');

const router = express.Router();

const dataSignificado = fs.readFileSync(
  './src/assets/data/signficado.json',
  'utf8',
);
const dataBlog = require('../../src/assets/data/blog.json');

const datasSign = JSON.parse(dataSignificado);
// const dataSignificado = fs.readFileSync('../../src/assets/data/signficado.json');
// const datasSign = JSON.parse(dataSignificados);

router.get('/significado', (req, res) => {
  res.send(datasSign);
});
router.get('/blog', (req, res) => {
  res.send(dataBlog);
});

module.exports = router;
