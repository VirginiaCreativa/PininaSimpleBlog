const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Estilo de Vida');
});
module.exports = router;
