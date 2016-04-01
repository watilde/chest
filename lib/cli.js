'use strict';
var chest = require('./main')
var pkg = require(__dirname + '/../package.json')
var updateNotifier = require('update-notifier')
var program = require('commander')

updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify()

program
  .version(pkg.version)

program
  .command('put [files]')
  .description('Put specified config file in the chest')
  .action(function (files) {
    chest.put(files)
  })

program
  .command('take [files]')
  .description('Take specified config file from the chest into the project root')
  .action(function (files) {
    chest.put(files)
  })

program
  .command('list')
  .description('Show list of config files in the chest')
  .action(chest.list)

program
  .command('open')
  .description('Place config files from the chest into the project root as symbolic links')
  .action(chest.open)

program
  .command('close')
  .description('Remove symbolic links created by "open"')
  .action(chest.close)

program.parse(process.argv)

if (program.args.length === 0) program.help()
