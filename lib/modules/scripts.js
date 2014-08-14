var fs = require('fs'),
    _ = require('underscore'),
    config = require('../config');
module.exports = function () {
  var paths  = config.paths;
  if (!fs.existsSync(paths.chestin + 'chest.json')) {
    console.error('No chest.json in the .chest');
    return;
  }
  var file = require(paths.chestin + 'chest.json');
  var scripts = file.scripts;
  if (!scripts) {
    console.error('No scripts in the chest.json');
    return;
  }
  var message = '';
  message += 'Scripts:\n';
  _.each(scripts, function(script, key) {
    message += '    chest run ' + key;
    message += ': ';
    message += script.usage + '\n';
  });
  console.info(message);
};
