'use strict';
var fs     = require('fs');
var exec   = require('child_process').exec;
var assert = require('power-assert');
var chest  = require('../lib/main');
var dummy_file_name = 'config_file';

describe('chest', function() {
  before(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
  });
  it('put dummy config_file', function(done) {
    chest.put([dummy_file_name]);
    exec('ls .chest', function (err, stdout, stderr) {
      var files = stdout.split('\n');
      assert.notEqual(files.indexOf(dummy_file_name), -1);
      done();
    });
  });

  it('take dummy config_file', function(done) {
    chest.take([dummy_file_name]);
    exec('ls', function (err, stdout, stderr) {
      var files = stdout.split('\n');
      assert.notEqual(files.indexOf(dummy_file_name), -1);
      done();
    });
  });
  after(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
  });
});
