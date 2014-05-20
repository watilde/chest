var fs     = require('fs'),
    diff   = require('diff'),
    colors = require('colors'),
    config = require('../config');

module.exports = function (files) {
  var paths  = config.paths;

  files.forEach(function (file) {
    if (!fs.existsSync(paths.chest)) {
      console.error('Chest not found');
      return;
    }
    if (!fs.existsSync(paths.chestin + file)) {
      console.error('File not found: ' + paths.chestin + file);
      return;
    }
    if (fs.existsSync(paths.rootin + file)) {
      console.error('File already exist in root: ' + paths.rootin + file);
      console.error('diff:');
      diff.diffLines(
        fs.readFileSync(paths.chestin + file, {encoding: 'utf8'}),
        fs.readFileSync(paths.rootin + file, {encoding: 'utf8'})
      ).forEach(function(part) {
        if (!part.added && !part.removed) return;
        var color = part.added ? 'green' :
          part.removed ? 'red' : 'grey';
        part.value = (part.added ? '+' : '-') +
          '\t' + part.value;
        console.log(part.value[color]);
      });
      return;
    }
    try {
      fs.unlinkSync(paths.rootin + file);
    } catch (Exception) {}
    fs.renameSync(paths.chestin + file, paths.rootin + file);
  });
};
