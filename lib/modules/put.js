var fs = require('fs')
var async = require('async')
var diff = require('diff')
var inquirer = require('inquirer')
var config = require('../config')
var paths = config.paths

module.exports = function (files, silent) {
  async.forEachSeries(files, function (file, done) {
    if (!fs.existsSync(file)) {
      console.error('File not found: ' + file)
      return
    }
    if (!fs.existsSync(paths.chest)) {
      fs.mkdirSync(paths.chest)
    }
    if (fs.existsSync(paths.chestin + file)) {
      console.error('File already exist in chest: ' + file)
      console.error('diff:')
      diff.diffLines(
        fs.readFileSync(file, {encoding: 'utf8'}),
        fs.readFileSync(paths.chestin + file, {encoding: 'utf8'})
      ).forEach(function (part) {
        if (!part.added && !part.removed) return
        var color = part.added ? 'green' : part.removed ? 'red' : 'grey'
        part.value = (part.added ? '+' : '-') +
          '\t' + part.value
        console.log(part.value[color])
      })
      return
    }

    fs.renameSync(file, paths.chestin + file)
    if (silent) return done()
    var gitignore = false
    if (fs.existsSync(paths.gitignore)) {
      fs.readFileSync(paths.gitignore).toString().split('\n').forEach(function (line) {
        if ('/' + file === line) {
          gitignore = true
        }
      })
    }
    if (!gitignore) {
      inquirer.prompt([{
        type: 'confirm',
        name: 'gitignore',
        message: 'Add ' + file + ' to gitignore on the project root',
        default: false
      }], function (answer) {
        if (!answer.gitignore) return
        if (!fs.existsSync(paths.gitignore)) fs.writeFileSync(paths.gitignore, '')
        var fd = fs.openSync(paths.rootin + '.gitignore', 'a')
        fs.writeSync(fd, '/' + file + '\n', -1)
        fs.closeSync(fd)
        done()
      })
    }
  })
}
