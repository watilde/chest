var fs = require('fs')
var config = require('../config')
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
    console.log(file)
  })
}
