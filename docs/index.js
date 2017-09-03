const paths = require('../paths')
const icons = require('../index')(paths, 'vendor-prefix')

function toIcon (name) {
  return `
    <div class="icon">
      ${icons.getIcon(name, `title="${name}"`)}
      <label>${name}</label>
    </div>
  `
}

const body = `
  ${Object.keys(paths).map(toIcon).join('')}
  ${icons.getSymbols()}
`

if (typeof window !== 'undefined') {
  if (window.document && window.document.body) attach()
  window.document.addEventListener('DOMContentLoaded', attach)

  function attach () {
    const wrapper = document.createElement('div')
    wrapper.className = 'icons'
    wrapper.innerHTML = body

    document.body.appendChild(wrapper)

    document.body.addEventListener('click', function (evt) {
      try {
        var success = document.execCommand('copy')
        var name = window.getSelection().baseNode.data
        console.log(`Copied the icon ${name} into the clipboard`)
      } catch (err) {
        return console.error('Copy is not supported', err)
      }
    })
  }
}
