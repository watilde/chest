'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'

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
