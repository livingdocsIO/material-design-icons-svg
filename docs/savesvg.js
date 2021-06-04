const path = require('path')
const paths = require('../paths')
const iconNames = Object.keys(paths)
const icons = require('../index')(paths, 'vendor-prefix')
const fs = require('fs')

for (const key in paths) {
  fs.writeFileSync(path.resolve('./svg', `${key}.svg`), getSVG(paths[key]))
}

function getSVG (path) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6e6e6e">` +
    `<path transform="scale(0.5) translate(12 12)" d="${path}"/>` +
  `</svg>`
}
