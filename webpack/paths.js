const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: {
    app: path.resolve(__dirname, '../', 'src/index.jsx'),
    imports: path.resolve(__dirname, '../', 'src/scripts/imports.js'),
  },
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  bootstrappPath: path.resolve(__dirname, 'node_modules/bootstrap'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
