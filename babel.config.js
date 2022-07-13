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
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
