var fs = require('fs')
var path = require('path')
var diff = require('diff')
var config = require('./config')
var paths = config.paths

module.exports = function (files) {
  files.forEach(function (file) {
    if (!fs.existsSync(paths.chest)) {
      console.error('Chest not found')
      return
    }
    if (!fs.existsSync(path.join(paths.chestin, file))) {
      console.error('File not found: ' + paths.chestin + file)
      return
    }
    if (fs.existsSync(path.join(paths.rootin, file))) {
      console.error('File already exist in root: ' + paths.rootin + file)
      console.error('diff:')
      diff.diffLines(
        fs.readFileSync(path.join(paths.chestin, file), {encoding: 'utf8'}),
        fs.readFileSync(path.join(paths.rootin, file), {encoding: 'utf8'})
      ).forEach(function (part) {
        if (!part.added && !part.removed) return
        var color = part.added ? 'green' : part.removed ? 'red' : 'grey'
        part.value = (part.added ? '+' : '-') +
          '\t' + part.value
        console.log(part.value[color])
      })
      return
    }
    try {
      fs.unlinkSync(path.join(paths.rootin, file))
    } catch (Exception) {}
    fs.renameSync(path.join(paths.chestin, file), path.join(paths.rootin, file))
  })
}
