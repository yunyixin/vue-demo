const path = require('webpack');
const autoprefixer = require('autoprefixer');

//webpack plugin
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    app: './src/main.js',
    vendor: './src/vendor.js'
  },

  resolve: {
    extensions: ['.js', '.vue'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
        // options: {
        //     loaders: {
        //         css: extractTextPlugin.extract({
        //             use: 'css!sass',
        //         })
        //     }
        // }

      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.json$/,
        use: 'json-loader'
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.(woff|woff2)(\?[v=\d\.]+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },

      {
        test: /\.ttf(\?[v=\d\.]+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },

      {
        test: /\.eot(\?[v=\d\.]+)?$/,
        use: 'file-loader'
      },

      {
        test: /\.svg(\?[v=\d\.]+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ]

  },

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),

    new CopyWebpackPlugin([{
      from: 'static',
      to: 'assets'
    }]),
  ]

};