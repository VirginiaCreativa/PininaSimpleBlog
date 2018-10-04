const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const fs = require('fs');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');

const logger = require('./logger.js');
const home = require('./routes/home.js');
const sobremi = require('./routes/sobremi.js');
const massignificado = require('./routes/massignificado.js');
const cursos = require('./routes/cursos.js');
const blog = require('./routes/blog.js');
const contactos = require('./routes/contactos.js');
const api = require('./routes/api.js');

const compiler = webpack(webpackConfig);

// mongoose
//   .connect(
//     'mongodb://localhost:27017/pininablog',
//     {
//       useNewUrlParser: true,
//     },
//   )
//   .then(() => console.log('Connectd to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(logger);

app.use(express.static(__dirname + '/dist'));
app.use(express.json());

app.use(hotmiddleware(compiler));
app.use(
  middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.dev,
  }),
);

// ROUTER
app.use('/', home);
app.use('/sobremi', sobremi);
app.use('/massignificado', massignificado);
app.use('/cursos', cursos);
app.use('/blog', blog);
app.use('/contactos', contactos);
app.use('/api', api);

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening 3000');
});
