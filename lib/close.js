var fs = require('fs')
var path = require('path')
var config = require('./config')
var paths = config.paths

module.exports = function () {
  if (!fs.existsSync(paths.chest)) {
    console.error('Chest not found')
    return
  }
  var files = fs.readdirSync(paths.chest)
  if (files.length === 0) {
    console.log('Chest is blank')
  }
  files.forEach(function (file) {
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
      exists = true
    }
    if (!exists) {
      return
    }
    try {
      fs.unlinkSync(path.join(paths.rootin, file))
    } catch (e) {}
  })
}
