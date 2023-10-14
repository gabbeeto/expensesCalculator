const path = require('path');
const html = require('html-webpack-plugin');


module.exports = {
  entry: './input/fileImporter.js',
  mode: 'production',
  plugins: [new html({template: './input/index.html'})],
  devServer:{
    static:{ directory: './output'},
    port:8080,
    open:true,
  },
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
