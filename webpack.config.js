var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  entry: './src/date-handling.js',
  output: {
    path: './',
    filename: 'date-handling.js'
  },
  devServer: {
    inline: true,
    port: 1111
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
