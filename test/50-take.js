'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummyFileName = 'metafile'
var dummyBowerJson = 'bower.json'
var chestignore = '.chestignore'

test('take dummy config_file', function (t) {
  chest.take([dummyFileName])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(dummyFileName), -1)
  t.end()
})

test('take dummy bower.json', function (t) {
  chest.take([dummyBowerJson])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(dummyBowerJson), -1)
  t.end()
})

test('take dummy .chestignore', function (t) {
  chest.take([chestignore])
  var files = fs.readdirSync('./')
  t.notEqual(files.indexOf(chestignore), -1)
  t.end()
})
