const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');


// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = webpackMerge(webpackCommon, {

  bail: true,

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[hash].min.js',
    sourceMapFilename: '[name]-[hash].map',
    chunkFilename: '[id]-[chunkhash].js'
  },

  module: {

    // TODO: use webpack old syntax to compatible with ExtractTextPlugin
    // https://github.com/webpack/extract-text-webpack-plugin/issues/275
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer];
              }
            }
          }, 'sass-loader']

        })
      }
    ]

  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      },
      __DEVELOPMENT__: true
    }),

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),

    new ExtractTextPlugin('[name]-[chunkhash].min.css'),

    new UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })

    // optimize module ids by occurrence count
    // new webpack.optimize.OccurrenceOrderPlugin()
  ]

});