const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const paths = require('./paths')
const icons = require('./index')(paths, 'vendor-prefix')
function toIcon (name) {
  return `
    <div>
      ${icons.getIcon(name, `title="${name}"`)}
      <label>${name}</label>
    </div>
  `
}

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`
    <style>
      html {
        font-size: 16px;
        font-family: sans-serif;
      }

      div {
        display: inline-block;
        padding: 20px;
        text-align: center;
        color: rgba(0, 0, 0, .5);
        transition: color 300ms;
      }

      div:hover {
        color: rgb(4, 0, 128);
      }

      label {
        display: block;
      }

      svg {
        display: inline-block;
        fill: currentColor;
        width: 2em;
        height: 2em;
        margin-bottom: 20px;
      }
    </style>

    ${Object.keys(paths).map(toIcon).join('')}
    ${icons.getSymbols()}
  `)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
