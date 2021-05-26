const paths = require('../paths')
const iconNames = Object.keys(paths)
const icons = require('../index')(paths, 'vendor-prefix')
const debounce = require('lodash.debounce')


function toIcon (name) {
  const el = document.createElement('div')
  el.innerHTML = `<div class="icon show" name="${name}">
      ${icons.getIcon(name, `title="${name}"`)}
      <p>${name}</p>
    </div>
  `
  return el.firstChild
}

const elements = []
const withName = []
for (const iconName in paths) {
  withName.push({
    name: iconName,
    element: elements[elements.push(toIcon(iconName)) - 1]
  })
}

function attach () {
  const search = document.createElement('div')
  search.className = 'panel'
  search.innerHTML = '<input class="search" type="text" placeholder="Search for some icons...">'

  const wrapper = document.createElement('div')
  wrapper.className = 'icons'
  wrapper.innerHTML = icons.getSymbols()
  document.body.append(search, wrapper)
  wrapper.append(...elements)

  const iconSearch = require('simple-text-search')(withName, 'name')
  search.querySelector('input').addEventListener('keyup', debounce(function debouncedKeyUp (evt) {
    if (!evt.target.value) {
      for (const element of elements) element.classList.add('show')
    } else {
      for (const element of elements) element.classList.remove('show')
      for (const entry of iconSearch(evt.target.value)) entry.element.classList.add('show')
    }
  }, 300, {maxWait: 600}))
}

if (typeof window !== 'undefined') {
  if (window.document && window.document.body) attach()
  window.document.addEventListener('DOMContentLoaded', attach)
}
