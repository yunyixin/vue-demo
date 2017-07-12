const path = require('path');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

const env = require('../env');


module.exports = webpackMerge(webpackCommon, {

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, '../static/dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id]-chunk.js',
    publicPath: '/'
  },


  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [autoprefixer];
            }
          }
        }, 'sass-loader']
      },
    ]

  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      },
      __DEVELOPMENT__: true
    })
  ],

  devServer: {
    quiet: true,
    port: (env.devServer.port + 30) || 3030,
    host: env.devServer.host || 'localhost',
    open: false,   // open page
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});