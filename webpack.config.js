const path = require('path');
const html = require('html-webpack-plugin');


module.exports = {
  entry: './input/fileImporter.js',
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new html({template: './input/index.html'})],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'output'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  module: {
    rules: [{ test: /\.css$/i, use: ['style-loader', 'css-loader'] }, { test: /\.(ttf|otf|jpg|png)$/i, type: 'asset/resource' }]
  }

}
