const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: '@sucrase/webpack-loader',
            options: {
              transforms: ['imports']
            }
          }
        ]
      }
    ]
  },
  externals: [
    nodeExternals()
  ],
  stats: {
    errorDetails: true
  }
}
