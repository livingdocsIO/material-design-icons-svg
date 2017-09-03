process.stdout.write('Downloading icons...')
var interval = setInterval(function () { process.stdout.write('.') }, 500)
process.on('exit', function () {
  process.stdout.write('\n')
  clearInterval(interval)
})

const writeFile = require('util').promisify(require('fs').writeFile)
const https = require('https')
const fs = require('fs')
const join = require('path').join

function getMdiApi(path, cb) {
  return https.get({
    host: 'materialdesignicons.com',
    path: '/api' + path
  }, function(response) {
    var body = ''
    response.on('data', function(d) {
      body += d
    })
    response.on('end', function() {
      var parsed
      try {
        parsed = JSON.parse(body)
      } catch (e) {
        console.error('Did not receive JSON:', body)
        console.error(e)
      }
      cb(parsed)
    })
  })
}

fs.mkdir('./paths', function (err) {
  if (err && err.code !== 'EEXIST') throw err

  getMdiApi('/init', function (init) {
    var mainPackageId = init.packages[0].id
    getMdiApi('/package/' + mainPackageId, function(data) {
      var paths = data.icons.reduce(function (all, icon) {
        all[icon.name] = icon.data
        return all
      }, {})

      var json = JSON.stringify(paths)
      fs.writeFile(join(__dirname, 'paths.json'), json, function (err) {
        if (err) throw err

        const promises = data.icons.map((icon) => writeFile(join(__dirname, 'paths', `${icon.name}.json`), `"${icon.data}"`))
        Promise.all(promises).then(() => process.exit(0))
      })
    })
  })
})
