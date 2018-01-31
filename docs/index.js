const paths = require('../paths')
const iconNames = Object.keys(paths)
const iconSearch = require('simple-text-search')(iconNames)
const icons = require('../index')(paths, 'vendor-prefix')
const debounce = require('lodash.debounce')

function toIcon (name) {
  return `
    <div class="icon" name="${name}">
      ${icons.getIcon(name, `title="${name}"`)}
      <input type="text" value="${name}" autocorrect="false" spellcheck="false"/>
    </div>
  `
}

const body = `
  ${iconNames.map(toIcon).join('')}
  ${icons.getSymbols()}
`

if (typeof window !== 'undefined') {
  if (window.document && window.document.body) attach()
  window.document.addEventListener('DOMContentLoaded', attach)

  function attach () {
    const search = document.createElement('div')
    search.className = 'panel'
    search.innerHTML = '<input class="search" type="text" placeholder="Search for some icons...">'

    const wrapper = document.createElement('div')
    wrapper.className = 'icons'
    wrapper.innerHTML = body

    document.body.appendChild(search)
    document.body.appendChild(wrapper)

    search.querySelector('input').addEventListener('keyup', debounce(function (evt) {
      console.log(evt.target.value)
      wrapper.querySelectorAll('.icon').forEach(function (icon) {
        icon.className = icon.className = 'icon hide'
      })

      const results = iconSearch(evt.target.value)
      results.forEach(function (iconName) {
        const icon = wrapper.querySelector(`[name=${iconName}]`)
        if (icon) icon.className = 'icon'
      })
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
}
