var fs     = require('fs'),
    util   = require('util'),
    config = require('../config'),
    diff   = require('diff'),
    colors = require('colors');

module.exports = function (files) {
  var paths  = config.paths;

  files.forEach(function (file) {
    if (!fs.existsSync(file)) {
      console.error('File not found: ' + file);
      return;
    }
    if (!fs.existsSync(paths.chest)) {
      fs.mkdirSync(paths.chest);
    }
    if (fs.existsSync(paths.chestin + file)) {
      console.error('File already exist in chest: ' + file);
      console.error('diff:');
      diff.diffLines(
        fs.readFileSync(file, {encoding: 'utf8'}),
        fs.readFileSync(paths.chestin + file, {encoding: 'utf8'})
      ).forEach(function(part) {
        if (!part.added && !part.removed) return;
        part.value = (part.added ? '+' : '-') +
          '    ' + part.value;
        var color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
        console.log(part.value[color]);
      });
      return;
    }
  });
};
