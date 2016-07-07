'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummyFileName = 'metafile'
var dummyBowerJson = 'bower.json'
var chestignore = '.chestignore'
var silent = true

test('put dummy config_file', function (t) {
  chest.put([dummyFileName], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(dummyFileName), -1)
  t.end()
})

test('put dummy bower.json', function (t) {
  chest.put([dummyBowerJson], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(dummyBowerJson), -1)
  t.end()
})

test('put dummy .chestignore', function (t) {
  chest.put([chestignore], silent)
  var files = fs.readdirSync('./.chest')
  t.notEqual(files.indexOf(chestignore), -1)
  t.end()
})
