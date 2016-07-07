'use strict'
var fs = require('fs')
var rimraf = require('rimraf')
var test = require('tap').test
var dummyFileName = 'metafile'
var dummyBowerJson = 'bower.json'
var chestignore = '.chestignore'

test('clean', function (t) {
  if (fs.existsSync('.chest')) {
    rimraf.sync('.chest')
  }
  if (fs.existsSync(dummyBowerJson)) {
    rimraf.sync(dummyBowerJson)
  }
  if (fs.existsSync(dummyFileName)) {
    rimraf.sync(dummyFileName)
  }
  if (fs.existsSync(chestignore)) {
    rimraf.sync(chestignore)
  }
  t.end()
})
