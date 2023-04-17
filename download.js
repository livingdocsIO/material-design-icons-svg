process.stdout.write('Processing icons...')

let interval = setInterval(function () { process.stdout.write('.') }, 500)
process.on('exit', function () {
  process.stdout.write('\n')
  clearInterval(interval)
})

const fs = require('fs/promises')
const join = require('path').join

async function start () {
  await fs.mkdir('./paths').catch((err) => { if (err.code !== 'EEXIST') throw err })

  const dir = require.resolve('@mdi/svg/package.json').replace('package.json', 'svg')
  const icons = await fs.readdir(dir)
  for (const icon of icons) {
    const _name = icon.replace('.svg', '')
    const name = _name === 'package' ? 'package-regular' : _name

    const sourceFile = join(dir, icon)
    const source = await fs.readFile(sourceFile, 'utf8')
    const path = source.match(/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" id="[^"]+" viewBox="0 0 24 24"><path d="([^"]+)" \/><\/svg>$/)?.[1]
    if (!path) {
      console.log('not matching pattern', icon, source)
      continue
    }
    await fs.writeFile(join(__dirname, 'paths', `${name}.json`), `"${path}"`)
  }

  const files = await fs.readdir(join(__dirname, 'paths'))
  const paths = await Promise.all(files.map(async (file) => {
    const content = await fs.readFile(join(__dirname, 'paths', file), 'utf8')
    return {
      name: file.replace('.json', ''),
      path: JSON.parse(content)
    }
  }))

  const json = {}
  for (const icon of paths) json[icon.name] = icon.path
  await fs.writeFile(join(__dirname, 'paths.json'), JSON.stringify(json))
  process.exit(0)
}

start()
