/**
 * Development build triggered by light-server
 *
 * Generates svg sprite and triggers harpjs generation
 */

// Module imports
let fs = require('fs')
let path = require('path')
let SVGSprite = require('svg-sprite')
let harp = require('harp')

// Get arguments
let rebuildType = process.argv[2]

// Constants
const svgFolder = '../src/img/_svg/'
const svgDest = '../src/img/sprite.svg'
const src = path.join(__dirname, '../src')
const dest = path.join(__dirname, '../build')

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
      css: true
    }
  })

  files.forEach(
    file => {
      console.log(file, svgFolder + file)
      spriter.add(path.resolve(path.join(__dirname, svgFolder, file)), file, fs.readFileSync(path.resolve(path.join(__dirname, svgFolder, file)), {encoding: 'utf-8'}))
    }
  )

  spriter.compile(
    (err, res) => err ? console.error(err) : fs.writeFileSync(svgDest, res.css.sprite.contents)
  )
}

/**
 * Calls HarpJS and rebuilds the website
 */
function rebuildHarp () {
  console.log('Creating Harp Build...')
  harp.compile(src, dest, err => err ? console.log(err) : null)
}
