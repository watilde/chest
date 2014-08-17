var fs = require('fs'),
    async = require('async'),
    config = require('../config'),
    targets = [
      'bower.json',
      'component.json',
      'package.json'
    ];

module.exports = function (end) {
  var paths = config.paths;
  if (!fs.existsSync(paths.chestin + 'chest.json')) {
    console.error('No chest.json in the .chest');
    return;
  }
  var chest_json = require(paths.chestin + 'chest.json');
  var name = chest_json.name || false;
  var description = chest_json.description || false;
  var version = chest_json.version || false;
  var files = fs.readdirSync(paths.chestin);
  var i = 0;

  async.forEach(files, function (file, done) {
    i += 1;
    if (targets.indexOf(file) === -1) {
      if (files.length === i) end();
      done();
      return;
    }
    var target = require(paths.chestin + file);
    if (name) target.name = name;
    if (description) target.description = description;
    if (version) target.version = version;
    fs.writeFileSync(
      paths.chestin + file,
      JSON.stringify(target, 2, 2)
    );
    if (files.length === i) end();
  });
};
