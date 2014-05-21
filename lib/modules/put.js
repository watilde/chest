var fs       = require('fs'),
    diff     = require('diff'),
    colors   = require('colors'),
    inquirer = require('inquirer'),
    config   = require('../config');

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
        var color = part.added ? 'green' :
          part.removed ? 'red' : 'grey';
        part.value = (part.added ? '+' : '-') +
          '\t' + part.value;
        console.log(part.value[color]);
      });
      return;
    }

    fs.renameSync(file, paths.chestin + file);
    var gitignore = false;
    if (fs.existsSync(paths.gitignore)) {
      fs.readFileSync(paths.gitignore).toString().split("\n").forEach(function(line) {
        if ('/' + file === line) {
          gitignore = true;
        }
      });
    }
    if (!gitignore) {
      inquirer.prompt([{
        type: "confirm",
        name: "gitignore",
        message: "Add " + file + " to gitignore on the project root"
      }], function (answer) {
        if (!answer.gitignore) return;
        if (!fs.existsSync(paths.gitignore)) fs.writeFileSync(paths.gitignore, '');
        var fd = fs.openSync(paths.rootin + '.gitignore', 'a');
        fs.writeSync(fd, '/' + file + '\n' , -1);
        fs.closeSync(fd);
      });
    }
  });
};
