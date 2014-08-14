var fs       = require('fs'),
    exec = require('child_process').exec,
    config   = require('../config');

module.exports = function (key, done) {
  var paths = config.paths;
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
  var script = scripts[key];

  exec(script.run, function(err, stdout, stderr) {
    if (!err) {
      if (stdout) console.log('stdout:\n' + stdout);
      if (stderr) console.log('stderr:\n' + stderr)
    } else {
      if (err) console.log('err:\n' + err);
    }
    if (done) done();
    return;
  });
};
