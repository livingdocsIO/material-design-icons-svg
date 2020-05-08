const paths = require('../paths')
const iconNames = Object.keys(paths)
const icons = require('../index')(paths, 'vendor-prefix')
const debounce = require('lodash.debounce')

function toIcon (name) {
  return `
    <div class="icon show" name="${name}">
      ${icons.getIcon(name, `title="${name}"`)}
      <input type="text" value="${name}" autocorrect="false" spellcheck="false"/>
    </div>
  `
}

const body = `
  ${iconNames.map(toIcon).join('')}
  ${icons.getSymbols()}
`

function attach () {
  const search = document.createElement('div')
  search.className = 'panel'
  search.innerHTML = '<input class="search" type="text" placeholder="Search for some icons...">'

  const wrapper = document.createElement('div')
  wrapper.className = 'icons'
  wrapper.innerHTML = body

  document.body.appendChild(search)
  document.body.appendChild(wrapper)

  const icons = [...wrapper.querySelectorAll('.icon')].map((element) => ({
    name: element.attributes.name.value,
    element
  }))

  const iconSearch = require('simple-text-search')(icons, 'name')
  search.querySelector('input').addEventListener('keyup', debounce(function (evt) {
    if (!evt.target.value) {
      for (const { element } of iconSearch()) element.className = 'icon show'
      return
    }

    for (const { element } of iconSearch()) element.className = 'icon'

    for (const {element} of iconSearch(evt.target.value)) {
      element.className = 'icon show'
    }
  }), 100)

  wrapper.addEventListener('click', function (evt) {
    if (!evt.target || evt.target.className !== 'icon') return

    const el = evt.target.querySelector('input')
    const name = el.value
    el.select()

    try {
      document.execCommand('copy')
      console.log(`Copied the icon '${name}' into the clipboard`)
    } catch (err) {
      return console.error('Copy is not supported', err)
    }
  })
}

if (typeof window !== 'undefined') {
  if (window.document && window.document.body) attach()
  window.document.addEventListener('DOMContentLoaded', attach)
}
