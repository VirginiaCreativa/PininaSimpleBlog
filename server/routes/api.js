const express = require('express');
const fs = require('fs');

const router = express.Router();

const dataSignificado = fs.readFileSync('./src/assets/data/signficado.json');
const dataBlog = fs.readFileSync('./src/assets/data/blog.json');

const datasSign = JSON.parse(dataSignificado);
const datasBlog = JSON.parse(dataBlog);

router.get('/significado', (req, res) => {
  res.send(datasSign);
});
router.get('/blog', (req, res) => {
  res.send(datasBlog);
});

module.exports = router;
