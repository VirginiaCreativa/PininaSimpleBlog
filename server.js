const express = require('express');

const app = express();
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const dataTeaching = require('./src/assets/data/teaching.json');
const dataLifeStyle = require('./src/assets/data/lifestyle.json');

const compiler = webpack(webpackConfig);

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

app.get('/api/teaching', (req, res) => {
  res.send(dataTeaching);
});
app.get('/api/lifestyle', (req, res) => {
  res.send(dataLifeStyle);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening 3000');
});
