const {postcssPath, kConfigPath} = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const util = require('../server/util/util');
const kConfig = require(kConfigPath);

module.exports = {
  entry: kConfig.entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
