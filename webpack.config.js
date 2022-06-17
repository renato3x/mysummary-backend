const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const DotEnvPlugin = require('dotenv-webpack')

const path = require('path')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new DotEnvPlugin({
      path: path.join(__dirname, '.env')
    })
  ],
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
