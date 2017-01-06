/**
 * Development build triggered by light-server
 *
 * Generates svg sprite and triggers harpjs generation
 */

// Module imports
let fs = require('fs-extra')
let path = require('path')
let SVGSprite = require('svg-sprite')
let harp = require('harp')

// Get arguments
let rebuildType = process.argv[2]

// Constants
let buildOptions = fs.readJsonSync(path.join(__dirname, '../src/_config.json')).buildOptions
const { svgFolder, svgDest, websiteSrc, websiteDest } = buildOptions
const src = path.join(__dirname, websiteSrc)
const dest = path.join(__dirname, websiteDest)

switch (rebuildType) {
  case 'svg':
    rebuildSVG()
    break
  default:
    rebuildHarp()
}

/**
 * Uses SVGSprite to rebuild svgs
 */
function rebuildSVG () {
  console.log('Compiling svg...')

  let files = fs.readdirSync(svgFolder)
  let spriter = new SVGSprite({
    dest: svgDest,
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

  files.forEach(
    file => {
      spriter.add(path.resolve(path.join(svgFolder, file)), file, fs.readFileSync(path.resolve(path.join(svgFolder, file)), {encoding: 'utf-8'}))
    }
  )

  spriter.compile(
    (err, res) => err ? console.error(err) : fs.writeFileSync(svgDest, res.symbol.sprite.contents)
  )
}

/**
 * Calls HarpJS and rebuilds the website
 */
function rebuildHarp () {
  console.log('Creating Harp Build...')
  harp.compile(src, dest, err => err ? console.log(err) : null)
}
