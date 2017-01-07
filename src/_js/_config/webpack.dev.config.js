let path = require('path')

module.exports = {
  entry: path.join(__dirname, '../index.js'),
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '../../../dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
