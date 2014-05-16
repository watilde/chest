module.exports = function (files) {
  var fs = require('fs');

  files.forEach(function (file) {
    if (!fs.existsSync(file)) {
      console.log('File not found: ' + file);
      return;
    }
    if (!fs.existsSync('./.chest')) {
      fs.mkdirSync('./.chest');
    }

  });
};
