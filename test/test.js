'use strict';
var fs     = require('fs');
var exec   = require('child_process').exec;
var assert = require('power-assert');
var chest  = require('../lib/main');
var dummy_file_name = 'metafile';
var dummy_chest_json = 'chest.json';
var silent = true;

describe('chest', function() {
  before(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
  });
  it('put dummy config_file', function() {
    chest.put([dummy_file_name], silent);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('put dummy chest.json', function() {
    chest.put([dummy_chest_json], silent);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_chest_json), -1);
  });
  it('open metafiles', function() {
    chest.open();
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
    assert.notEqual(files.indexOf(dummy_chest_json), -1);
  });
  it('run chest-run-scripts', function(done) {
    chest.run('answer', done);
  });
  it('check chest-run-scripts', function() {
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf('42'), -1);
  });
  it('close config_file', function() {
    chest.close();
    var files = fs.readdirSync('./');
    assert.equal(files.indexOf(dummy_file_name), -1);
    assert.equal(files.indexOf(dummy_chest_json), -1);
  });
  it('take dummy config_file', function() {
    chest.take([dummy_file_name]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('take dummy chest.json', function() {
    chest.take([dummy_chest_json]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_chest_json), -1);
  });
  after(function() {
    fs.rmdirSync('.chest');
    fs.unlinkSync('42');
  });
});
