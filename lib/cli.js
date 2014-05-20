'use strict';
var argv  = process.argv;
var chest = require('./main');

if(argv[2] !== void 0) {
  switch (argv[2]) {
  case 'usage':
    if (argv.length === 3) {
      chest.usage();
      break;
    }
  case 'put':
    if (argv.length > 3) {
      argv.splice(0, 3);
      chest.put(argv);
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
