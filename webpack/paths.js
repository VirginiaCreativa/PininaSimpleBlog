const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: {
    index: path.resolve(__dirname, '../', 'src/index.jsx'),
    imports: path.resolve(__dirname, '../', 'src/scripts/imports.js'),
  },
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
