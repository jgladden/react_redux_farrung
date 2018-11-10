const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_ENTRY = path.resolve(__dirname, './src/app.js');
const ADMIN_ENTRY = path.resolve(__dirname, './src/admin.js');
const OUTPUT_DIR = path.resolve(__dirname, './dist');
const ASSETCONTEXT = 'src/assets';
const ALIAS = {
  components: path.resolve(__dirname + '/src/components'),
  containers: path.resolve(__dirname + '/src/containers'),
  actions: path.resolve(__dirname + '/src/actions'),
  reducers: path.resolve(__dirname + '/src/reducers'),
  utils: path.resolve(__dirname + '/src/utils'),
  config: path.resolve(__dirname + '/src/config'),
  img: path.resolve(__dirname + '/src/assets/img'),
  director: path.resolve(__dirname + '/node_modules/director/build/director')
};

module.exports = env => {
  const { PLATFORM } = env;
  return merge([
    {
      entry: {
        app: APP_ENTRY,
        admin: ADMIN_ENTRY
      },
      output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'js/[name].js'
      },
      devtool: 'source-map',
      devServer: {
        historyApiFallback: {
          rewrites: [
            { from: /^\/$/, to: '/index.html' },
            { from: /^\/admin/, to: '/admin.html' }
          ]
        },
        host: 'local.farrung.com',
        port: 8080, 
        https: true
      },  
      resolve: { 
        alias: ALIAS 
      }, 
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[path][name].[hash].[ext]',
                context: ASSETCONTEXT
              }
            }]
          },
          {
            test: /\.(eot|svg|ttf|woff2?|otf)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
                context: ASSETCONTEXT
              }
            }]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          chunks: ['app'],
          hash: true,
          template: './src/index.html',
          filename: './index.html'
        }),
        new HtmlWebpackPlugin({
          chunks: ['admin'],
          hash: true,
          template: './src/index.html',
          filename: './admin.html'
        }),
        new webpack.DefinePlugin({ 
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
      ],
    }
  ]);
};
