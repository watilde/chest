'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'
var silent = true

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
