const webpack = require('webpack');
const path = require('path');
const definePlugin = require('webpack/lib/DefinePlugin');

//plugins
const extractTextPlugin = require('extract-text-webpack-plugin');

const env = require('./env');

module.exports = {

  devtool: '#eval-source-map', // '#source-map',

  entry: {
    app: './src/main.js',
    vendor: './src/vendor.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id]-chunk.js'
  },

  resolve: {
    extensions: ['.js', '.vue'],
    modules: ['node_modules', 'src'],
    alias: {
      'vue': 'vue/dist/vue.common.js',
    }
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]

  },

  plugins: [
    new definePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      },
      __DEVELOPMENT__: true
    }),

    new extractTextPlugin('style.css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })

    // webpack.HotModuleReplacementPlugin
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
    // overlay: true //在shell中提示编译错误
    // stats: 'error-only'
    //contentBase
    // 自动刷新和热替换
  }

  // 如果要全部都用jQuery，就用插件的方法加载jQuery，代码在下面:point_down:
  // plugins: [
  //        new webpack.ProvidePlugin({
  //            $: "jquery",
  //            jQuery: "jquery",
  //            "window.jQuery": "jquery"
  //        })
  //    ]
};