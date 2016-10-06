var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/scss/main.scss',
    './src/js/main',
    './src/index.html',
    // 'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  debug: true,
  devServer: {
    contentBase: "./src",
    hot: true
  },
  sassLoader: {
    sourceMap: true
  }
};
