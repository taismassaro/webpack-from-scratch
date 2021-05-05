const path = require('path')

const randomFilename = (extension) => `${(new Date()).getTime()}-${Math.random()}.${extension}`

module.exports = function(source) {
  /** Emit file with random filename 
   * and stylesheet content to output directory.
   * Random filename is used to avoid clashes
   * when importing multiple stylesheets */
  const outputFilename = randomFilename('css')
  /** Normal function is crucial to have access 
   * to the loader context (this) */
  this.emitFile(outputFilename, source)

  /** Return a module that exports the path to the file */
  return `module.exports = '${outputFilename}'`
}