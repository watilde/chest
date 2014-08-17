'use strict';
var fs     = require('fs');
var exec   = require('child_process').exec;
var assert = require('power-assert');
var chest  = require('../lib/main');
var dummy_file_name = 'metafile';
var dummy_chest_json = 'chest.json';
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
  it('put dummy chest.json', function() {
    chest.put([dummy_chest_json], silent);
    var files = fs.readdirSync('./.chest');
    assert.notEqual(files.indexOf(dummy_chest_json), -1);
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
    assert.notEqual(files.indexOf(dummy_chest_json), -1);
  });
  it('run chest-run-scripts', function(done) {
    chest.run('answer', done);
  });
  it('check chest-run-scripts', function() {
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf('42'), -1);
  });
  it('sync meta info', function(done) {
    var bower = fs.readFileSync('./.chest/bower.json');
    var fixture = JSON.stringify(bower_json, 2, 2);
    assert.equal(bower, fixture);
    chest.sync(done);
  });
  it('check sync meta info', function() {
    var bower = require('./.chest/bower.json');
    var chest = require('./.chest/chest.json');
    assert.equal(bower.name, chest.name);
    assert.equal(bower.description, chest.description);
    assert.equal(bower.version, chest.version);
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
  it('take dummy bower.json', function() {
    chest.take([dummy_bower_json]);
    var files = fs.readdirSync('./');
    assert.notEqual(files.indexOf(dummy_bower_json), -1);
  });
  after(function() {
    fs.rmdirSync('.chest');
    fs.unlinkSync('42');
    fs.writeFileSync(
      './bower.json',
      JSON.stringify(bower_json, 2, 2)
    );
  });
});
