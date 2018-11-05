const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const assetcontext = 'src/assets';
const devMode = process.env.NODE_ENV !== 'production';

const alias = {
  components: __dirname + '/src/components',
  containers: __dirname + '/src/containers',
  actions: __dirname + '/src/actions',
  reducers: __dirname + '/src/reducers',
  utils: __dirname + '/src/utils',
  config: __dirname + '/src/config',
  img: __dirname + '/src/assets/img',
  director: __dirname + '/node_modules/director/build/director'
};

module.exports = { 
  entry: [
    'babel-polyfill', 
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  resolve: {
    alias
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: 'local.farrung.com',
    port: 8080, 
    https: true
  },  
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
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'f a r r u n g . d e s i g n . s t u d i o',
      filename: 'index.html',
      hash: true,
      template: __dirname + '/src/index.html'
    })  
  ]
};


