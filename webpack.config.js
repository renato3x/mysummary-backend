const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const DotEnvPlugin = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/templates',
          to: '../templates'
        }
      ]
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
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new TerserPlugin({
        test: /\.js(\?.*)?$/
      })
    ]
  },
  externals: [
    nodeExternals()
  ],
  stats: {
    errorDetails: true
  }
}
