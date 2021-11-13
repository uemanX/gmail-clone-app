const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const devMiddleware = require('webpack-dev-middleware');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      publicPath: '/public',
      writeToDisk: true,
    },
    compress: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
});
