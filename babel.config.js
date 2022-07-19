module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    "@babel/preset-typescript"
  ],
  plugins: [
    ['inline-dotenv', {
      path: './.env'
    }],
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@database': './src/database',
        '@middlewares': './src/middlewares',
        '@services': './src/services'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    './src/@types'
  ]
}
