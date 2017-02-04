/**
 * Bogdan Calapod | Tech Lounge | 28 Jan 2017
 *
 * Website build generation
 *
 * Provides methods for starting a development watch server based
 * on the configuration file, creating a Harp website build,
 * building Sass styles and JavaScript files, and
 * cleanup methods.
 *
 * Can receive a parameter to create a production
 * build, which adds two extra steps:
 * - output minification
 * - cache busting insertion
 *
 */

// Building modules
let harp = require('harp')
let webpack = require('webpack')
let SVGSprite = require('svg-sprite')

// OS Modules
let fs = require('fs-extra')
let path = require('path')

module.exports = {
  /**
   * Triggers a harp build
   *
   * @param  {object} options - harp source and destination
   * @property {string} [src='./src'] - source directory containing files
   * @property {string} [dest='./build'] - destination directory (usually '/build')
   */
  harpBuild: (options = {src: './src', dest: './build'}) => {
    console.log('Building Harp...')

    let {src, dest} = options

    harp.compile(src, dest, e => e ? console.error('Error building Harp', e) : null)
  },

  /**
   * Triggers a webpack build
   *
   * @param {object} config - Webpack config object
   */
  webpackBuild: (config) => {
    console.log('Building Webpack...')

    let builder = webpack(config)
    builder.run(e => e ? console.error('Error while building Webpack:', e) : null)
  },

  /**
   * Rebuilds the SVG using sprites
   *
   * @param {object} options - SVGSprite options
   * @property {string} src - Source for SVG files
   * @property {string} dest - Destination for SVG map
   */
  svgBuild: (options) => {
    console.log('Compiling svg...')

    let {src, dest} = options

    // Initialization
    let files = fs.readdirSync(src)
    let spriter = new SVGSprite({
      dest,
      log: 'debug',
      mode: {
        inline: true,
        symbol: {
          render: {
            css: false
          }
        }
      }
    })

    // Add files to processing queue
    files.forEach(
      file => {
        spriter.add(
          path.resolve(path.join(src, file)),
          file,
          fs.readFileSync(path.resolve(path.join(src, file)),
          {encoding: 'utf-8'}))
      }
    )

    // Compile the final SVG map
    spriter.compile(
      (err, res) => err ? console.error(err) : fs.writeFileSync(
        src,
        res.symbol.sprite.contents
      )
    )
  }
}
