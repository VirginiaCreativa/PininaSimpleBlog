const express = require('express');

const app = express();
const router = express.Router();
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const logger = require('./logger');
const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');
const api = require('./routes/api');

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));
app.use(express.json());
app.use(logger);
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
app.use('/api/', api);

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening 3000');
});
