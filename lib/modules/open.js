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
    fs.symlinkSync(
      paths.chestin + '/' + file,
      paths.root + '/' + file
    );
  });
};
