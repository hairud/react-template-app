const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '..', 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'template/index.html'),
    }),
  ],
  devServer: {
    port: 8081,
    progress: true,
    publicPath: '/',
    host: '0.0.0.0',
    stats: 'minimal',
    historyApiFallback: true,
    contentBase: path.join(__dirname, '..', 'dist'),
  },
};

module.exports = config;
