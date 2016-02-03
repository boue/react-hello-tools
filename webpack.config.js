var webpack = require('webpack');
var path = require('path');

//represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//directory path of the React apps codebase
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;