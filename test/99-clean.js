'use strict'
var fs = require('fs')
var rimraf = require('rimraf')
var test = require('tap').test
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'

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
