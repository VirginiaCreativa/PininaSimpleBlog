const express = require('express');

const app = express();
const router = express.Router();
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

app.use(logger);

app.use(express.static(__dirname + '/dist'));
app.use(express.json());

app.use(
  hotmiddleware(compiler, {
    heartbeat: 2000,
  }),
);

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
