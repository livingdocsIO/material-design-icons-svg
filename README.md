# material-design-icons-svg

This module downloads all icons from https://materialdesignicons.com and gives you some methods to load them in your browser (assumed you're using browserify/webpack/another commonjs module loader).

## Installation

```
npm install material-design-icons-svg
```

## Usage

```js
// Load all 1600 material design icons, ~170kb gzipped
var paths = require('material-design-icons-svg/paths')
var icons = require('material-design-icons-svg')(paths)

// Then you can use it wherever you like
var svg = icons.getSVG('access-point')
// returns inline svg
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.93,4....0Z" /></svg>

$(document.body).append(svg)


// OR if you care about performance

// You can load icons using the `<use>` notation.
icons.initialize(document.body) // Appends all icons to document.body
var icon = icons.getIcon('access-point')
// returns reference to initialized svg
// <svg>
//   <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#deviantart">
//   </use>
// </svg>
$(document.body).append(icon)
```

## Example

Check out `./example.js`

```
node example.js
```
