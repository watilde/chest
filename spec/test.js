'use strict';
var fs     = require('fs');
var exec   = require('child_process').exec;
var assert = require('power-assert');
var chest  = require('../lib/main');
var dummy_file_name = 'metafile';

describe('chest', function() {
  before(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
  });
  it('put dummy config_file', function() {
    chest.put([dummy_file_name]);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('open config_file', function() {
    chest.open();
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('close config_file', function() {
    chest.close();
    var files = fs.readdirSync('./');
    assert.equal(files.indexOf(dummy_file_name), -1);
  });
  it('take dummy config_file', function() {
    chest.take([dummy_file_name]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  after(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
  });
});
