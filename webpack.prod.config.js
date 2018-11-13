const path = require('path');
const merge = require('webpack-merge');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.config');

let pathsToClean = [ 'dist' ];
let cleanOptions = {
  root:     path.resolve(__dirname),
  exclude:  [],
  verbose:  true,
  dry:      false
}

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[hash].css'
        }),
        new OptimizeCssAssetsPlugin()
      ],
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}
