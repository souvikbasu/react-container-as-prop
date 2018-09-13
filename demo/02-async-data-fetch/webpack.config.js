const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([ { from: 'data', to: 'data' } ])

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig],
}
