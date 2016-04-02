var fs = require('fs')
var path = require('path')
var config = require('./config')
var paths = config.paths

module.exports = function () {
  var chestignore = _chestignore()
  if (!fs.existsSync(paths.chest)) {
    console.error('Chest not found')
    return
  }
  var files = fs.readdirSync(paths.chest)
  if (files.length === 0) {
    console.log('Chest is blank')
  }
  files.forEach(function (file) {
    if (file === '.chestignore') return
    if (chestignore.indexOf(file) !== -1) return
    var exists = false
    if (!fs.existsSync(path.join(paths.root, file))) {
      exists = true
    }
    try {
      var lstat = fs.lstatSync(path.join(paths.root, file))
      if (lstat.isSymbolicLink()) {
        exists = true
      }
    } catch (Exception) {
      exists = false
    }
    if (exists) {
      console.log('File already exist: ' + file)
      return
    }
    fs.symlinkSync(
      path.join(paths.chestin, file),
      path.join(paths.root, file)
    )
  })
}

function _chestignore () {
  if (!fs.existsSync(paths.chestignore)) {
    return []
  }
  return fs.readFileSync(paths.chestignore, 'utf8').split('\n')
}
