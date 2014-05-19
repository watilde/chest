module.exports = function (files) {
  var fs     = require('fs'),
      util   = require('util'),
      config = require('../config');

  files.forEach(function (file) {
    if (!fs.existsSync(file)) {
      console.error('File not found: ' + file);
      return;
    }
    if (!fs.existsSync(config.path + '/.chest')) {
      fs.mkdirSync(config.path + '/.chest');
    }
  });
};
