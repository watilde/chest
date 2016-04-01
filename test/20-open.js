'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'

test('open metafiles', function (t) {
  chest.open()
  var files = fs.readdirSync('./')
  t.equal(files.indexOf(dummy_file_name), -1)
  t.notEqual(files.indexOf(dummy_bower_json), -1)
  t.equal(files.indexOf(chestignore), -1)
  t.end()
})
