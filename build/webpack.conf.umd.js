const webpack = require('webpack');
const path = require('path')
const webpackConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'utils.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    library: 'Utils',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: [".js"]
  }
}

module.exports = webpackConfig;