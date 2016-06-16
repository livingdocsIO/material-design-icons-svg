module.exports = function icons (paths, prefix) {
  function initialize (host, names) {
    if (typeof host === 'undefined') throw new Error('A host-dom element is required. Initialize is only supported in browsers.')
    var doc = host.ownerDocument
    var div = doc.createElement('div')
    div.innerHTML = getSymbols(names)
    host.appendChild(div.firstChild)
  }

  function getSVG (name, attributes) {
    var path = paths[name]
    if (!path) return
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"'+ (attributes || '') +'><path d="' + path + '" /></svg>'
  }

  function getSymbols (names) {
    if (!names) names = Object.keys(paths)
    var symbols = names.map(function (name) { return toSymbol(name, paths[name], prefix) }).filter(Boolean)
    return '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">' + symbols.join('') + '</svg>'
  }

  function getIcon (name, attributes) {
    if (!paths[name]) return
    var id = prefix? prefix + '-' + name : name
    return '<svg ' + (attributes || '') + '><use xlink:href="#' + id + '" /></svg>'
  }

  return {
    initialize: initialize,
    getSVG: getSVG,
    getSymbols: getSymbols,
    getIcon: getIcon
  }
}

function toSymbol (name, path, prefix) {
  if (!path) return
  var id = prefix? prefix + '-' + name : name
  return '<symbol id="' + id + '" viewBox="0 0 24 24">' +
    '<title>' + name + '</title>' +
    '<path d="' + path + '" />' +
  '</symbol>'
}
