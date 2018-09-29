const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const assetcontext = 'src/assets';

module.exports = { 
  entry: ['babel-polyfill', __dirname + '/src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[hash].[ext]',
            context: assetcontext
          }
        }]
      },
      { 
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            context: assetcontext          
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: process.env.NODE_ENV !== 'production'
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      hash: true,
      template: __dirname + '/src/index.html'
    })  
  ]
};


