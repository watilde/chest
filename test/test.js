'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var bower_json = {
  name: 'name',
  description: 'description',
  version: 'version'
}
var silent = true

test('setup', function (t) {
  if (fs.existsSync('.chest')) {
    fs.rmdirSync('.chest')
  }
  fs.writeFileSync(
    './bower.json',
    JSON.stringify(bower_json, 2, 2)
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

test('open metafiles', function (t) {
  chest.open()
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(dummy_file_name), -1)
  t.notEqual(files.indexOf(dummy_bower_json), -1)
  t.end()
})
test('close config_file', function (t) {
  chest.close()
  var files = fs.readdirSync('./')
  t.equal(files.indexOf(dummy_file_name), -1)
  t.equal(files.indexOf(dummy_bower_json), -1)
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

test('clean', function (t) {
  fs.rmdirSync('.chest')
  fs.writeFileSync(
    './bower.json',
    JSON.stringify(bower_json, 2, 2)
  )
  t.end()
})
