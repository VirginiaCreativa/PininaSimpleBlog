const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');

const logger = require('./logger');
const home = require('./routes/home');
const sobre = require('./routes/sobre');
const ensenanza = require('./routes/ensenanza');
const estilodevida = require('./routes/estilodevida');
const contactos = require('./routes/contactos');
const api = require('./routes/api');

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

app.use(
  middleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackConfig.output.path,
  }),
);
app.use(hotmiddleware(compiler));

// ROUTER
app.use('/', home);
app.use('/sobre', sobre);
app.use('/ensenanza', ensenanza);
app.use('/estilodevida', estilodevida);
app.use('/contactos', contactos);
app.use('/api', api);

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening 3000');
});
