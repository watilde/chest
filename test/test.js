'use strict';
var fs     = require('fs');
var exec   = require('child_process').exec;
var assert = require('power-assert');
var chest  = require('../lib/main');
var dummy_file_name = 'metafile';
var dummy_bower_json = 'bower.json';
var bower_json = {
  name: 'name',
  description: 'description',
  version: 'version'
};
var silent = true;

describe('chest', function() {
  before(function() {
    if (fs.existsSync('.chest')) {
      fs.rmdirSync('.chest');
    }
    fs.writeFileSync(
      './bower.json',
      JSON.stringify(bower_json, 2, 2)
    );
  });
  it('put dummy config_file', function() {
    chest.put([dummy_file_name], silent);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('put dummy bower.json', function() {
    chest.put([dummy_bower_json], silent);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_bower_json), -1);
  });
  it('open metafiles', function() {
    chest.open();
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
    assert.notEqual(files.indexOf(dummy_bower_json), -1);
  });
  it('close config_file', function() {
    chest.close();
    var files = fs.readdirSync('./');
    assert.equal(files.indexOf(dummy_file_name), -1);
    assert.equal(files.indexOf(dummy_bower_json), -1);
  });
  it('take dummy config_file', function() {
    chest.take([dummy_file_name]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_file_name), -1);
  });
  it('take dummy bower.json', function() {
    chest.take([dummy_bower_json]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_bower_json), -1);
  });
  after(function() {
    fs.rmdirSync('.chest');
    fs.writeFileSync(
      './bower.json',
      JSON.stringify(bower_json, 2, 2)
    );
  });
});
