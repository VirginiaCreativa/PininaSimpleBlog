const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');

const logger = require('./logger.js');
const home = require('./routes/home.js');
const about = require('./routes/about.js');
const contact = require('./routes/contact.js');
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
app.use('/about', about);
app.use('/contact', contact);
app.use('/api', api);

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening 3000');
});
