'use strict';
var argv  = process.argv;
var chest = require('./main');

if(argv[2]) {
  switch (argv[2]) {
  case 'usage':
    if (argv.length === 3) {
      chest.usage();
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
