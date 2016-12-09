'use strict';

const path = require('path');

exports.angular = { // ships in ES6 format now
  test: /\.js$/,
  loader: 'babel-loader',
  include: /angular/,
  exclude: /node_modules/,
  query: {
    compact: false,
  },
};

exports.ts = {
  test: /\.ts$/,
  loader: '@ngtools/webpack',
};

exports.ts_JiT = {
  test: /\.ts$/,
  loaders: [
    'ts-loader',
    'angular2-template-loader',
  ],
};

exports.istanbulInstrumenter = {
  enforce: 'post',
  test: /^(.(?!\.spec))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/,
};

exports.localCss = {
  test: /\.css$/,
  loader: 'to-string-loader!css-loader?-minimize!postcss-loader',
  exclude: /node_modules/,
};

exports.globalCss = {
  test: /\.css$/,
  include: /node_modules/,
  loader: 'style-loader!css-loader?-minimize!postcss-loader',
};

exports.svg = makeFileLoader(/\.svg$/);
exports.eot = makeFileLoader(/\.eot$/);
exports.woff = makeFileLoader(/\.woff$/);
exports.woff2 = makeFileLoader(/\.woff2$/);
exports.ttf = makeFileLoader(/\.ttf$/);

function makeFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'file-loader',
    exclude: /node_modules/,
  };
}
