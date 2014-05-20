var fs     = require('fs'),
    config = require('../config');

module.exports = function (files) {
  var paths  = config.paths;

  if (!fs.existsSync(paths.chest)) {
    console.error('Chest not found');
    return;
  }
  var files = fs.readdirSync(paths.chest);
  if (files.length === 0) {
    console.log('Chest is blank');
  }
  files.forEach(function (file) {
    var exists = false;
    if (!fs.existsSync(paths.root + '/' + file)) {
      exists = true;
    }
    try {
      var lstat = fs.lstatSync(paths.root + '/' + file);
      if (lstat.isSymbolicLink()) {
        exists = true;
      }
    } catch (Exception) {
      exists = true;
    }
    if (!exists) {
      return;
    }
    fs.unlinkSync(paths.rootin + file);
  });
};
