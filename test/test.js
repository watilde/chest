'use strict'
var fs = require('fs')
var rimraf = require('rimraf')
var test = require('tap').test
var chest = require('../lib/main')
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'
var bower_json = {
  name: 'name',
  description: 'description',
  version: 'version'
}
var silent = true

test('setup', function (t) {
  if (fs.existsSync('.chest')) {
    rimraf.sync('.chest')
  }
  fs.writeFileSync(
    dummy_bower_json,
    JSON.stringify(bower_json, 2, 2)
  )
  fs.writeFileSync(
    dummy_file_name,
    'Hello World!'
  )
  fs.writeFileSync(
    chestignore,
    dummy_file_name
  )
  t.end()
})

test('put dummy config_file', function (t) {
  chest.put([dummy_file_name], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(dummy_file_name), -1)
  t.end()
})

test('put dummy bower.json', function (t) {
  chest.put([dummy_bower_json], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(dummy_bower_json), -1)
  t.end()
})

test('put dummy .chestignore', function (t) {
  chest.put([chestignore], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(chestignore), -1)
  t.end()
})

test('open metafiles', function (t) {
  chest.open()
  var files = fs.readdirSync('./')
  t.equal(files.indexOf(dummy_file_name), -1)
  t.notEqual(files.indexOf(dummy_bower_json), -1)
  t.equal(files.indexOf(chestignore), -1)
  t.end()
})
test('close config_file', function (t) {
  chest.close()
  var files = fs.readdirSync('./')
  t.equal(files.indexOf(dummy_file_name), -1)
  t.equal(files.indexOf(dummy_bower_json), -1)
  t.equal(files.indexOf(chestignore), -1)
  t.end()
})
test('take dummy config_file', function (t) {
  chest.take([dummy_file_name])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(dummy_file_name), -1)
  t.end()
})

test('take dummy bower.json', function (t) {
  chest.take([dummy_bower_json])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(dummy_bower_json), -1)
  t.end()
})

test('take dummy .chestignore', function (t) {
  chest.take([chestignore])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(chestignore), -1)
  t.end()
})

test('clean', function (t) {
  if (fs.existsSync('.chest')) {
    rimraf.sync('.chest')
  }
  if (fs.existsSync(dummy_bower_json)) {
    rimraf.sync(dummy_bower_json)
  }
  if (fs.existsSync(dummy_file_name)) {
    rimraf.sync(dummy_file_name)
  }
  if (fs.existsSync(chestignore)) {
    rimraf.sync(chestignore)
  }
  t.end()
})
