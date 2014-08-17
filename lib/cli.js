'use strict';
var argv  = process.argv;
var chest = require('./main');
var pkg = require(__dirname + '/../package.json');
var updateNotifier = require('update-notifier');

updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version
}).notify();

if(argv[2] !== void 0) {
  switch (argv[2]) {
  case 'usage':
    if (argv.length === 3) {
      chest.usage();
      break;
    }
  case 'run':
    if (argv.length === 4) {
      chest.run(argv[3]);
      break;
    }
  case 'scripts':
    if (argv.length === 3) {
      chest.scripts();
      break;
    }
  case 'put':
    if (argv.length > 3) {
      argv.splice(0, 3);
      chest.put(argv);
      break;
    }
  case 'take':
    if (argv.length > 3) {
      argv.splice(0, 3);
      chest.take(argv);
      break;
    }
  case 'open':
    if (argv.length === 3) {
      chest.open();
      break;
    }
  case 'list':
    if (argv.length === 3) {
      chest.list();
      break;
    }
  case 'install':
    if (argv.length === 3) {
      chest.install();
      break;
    }
  case 'boost':
    if (argv.length === 3) {
      chest.open();
      chest.install();
      break;
    }
  case 'close':
    if (argv.length === 3) {
      chest.close();
      break;
    }
  case 'sync':
    if (argv.length === 3) {
      chest.sync();
      break;
    }
  default:
    var message = 'Unrecognized command line argument: ';
    message += argv[2];
    message += ' ( see: \'chest usage\' )';
    console.log(message);
    break;
  }
} else {
  console.log('@see \'chest usage\'\n');
}
