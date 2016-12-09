'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const ENV = process.env.npm_lifecycle_event;
const JiT = ENV === 'build:jit';

import { ng2Examples } from './webpack/examples';

if (JiT) {
  console.log('AoT: false');
}
const config =  {
  context: path.join(__dirname, 'src'),

  entry: {
    app: './main.ts',
    ...ng2Examples,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js' : '[name].js',
    publicPath: '/',
    sourceMapFilename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js.map' : '[name].js.map',
    chunkFilename: process.env.NODE_ENV === 'production' ?
      '[name].chunk.[chunkhash].js' : '[name].js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: {},
    port: 4200,
  },

  module: {
    rules: [
      loaders.angular,
      loaders.ts_JiT,
      loaders.html,
      loaders.globalCss,
      loaders.localCss,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },
};

module.exports = config;
