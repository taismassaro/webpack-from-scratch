const path = require('path')
const HtmlPlugin = require('./webpack/HtmlPlugin')

module.exports = {
  module: {
    rules: [{
      test: /\.css$/, // use this rule for all files ending on .css
      use: [{
        loader: path.resolve(__dirname, 'webpack/CssLoader.js')
      }]
    }]
  },
  plugins: [new HtmlPlugin]
}
