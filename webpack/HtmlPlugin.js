const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

function createLinkTag (filepath) {
  return `<link rel="stylesheet" href="${filepath}" />`
}

function replaceTemplateVariables ({template, stylesheets}) {
  const stylesheetTags = stylesheets.map(each => createLinkTag(each))
  /** The template uses a placeholder that we replace with the <link> tag. */
  return template.replace('%stylesheets%', stylesheetTags.join('\n'))
}

class HtmlPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('HtmlPlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync({
        name: 'HtmlPlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
      }, (assets, callback) => {
        /** Assets is an object where each key corresponds
         * to the filepath of an asset that webpack generated.
         * We filter them to select only stylesheets.
         */
        const stylesheets = Object.keys(assets).filter((asset) => asset.endsWith('.css'))

        /** We load a template file and populate it with the <link> tags. */
        const pathToTemplate = path.join(__dirname, 'HtmlPlugin.html')
        const template = fs.readFileSync(pathToTemplate, 'utf8')
        const source = replaceTemplateVariables({template, stylesheets})

        /** Emit the index.html file to the build directory. */
        compilation.emitAsset('index.html', new webpack.sources.RawSource(source))
        callback()
      })
    })
  }
}

module.exports = HtmlPlugin
