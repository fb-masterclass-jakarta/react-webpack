const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true,
    inline: true,
    port: 3030,
  },
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: true,
        },
      },
    }),
  ],
  module: {
    loaders: [{
      exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.scss$/,
        /\.css$/,
        /\.json$/,
        /\.svg$/,
      ],
      loader: 'url',
      query: {
        limit: 10000,
        name: 'build/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    {
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss',
    },
    {
      test: /\.scss$/,
      loader: 'style!css?importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss!sass',
    }],
  },
};

