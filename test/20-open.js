'use strict'
var fs = require('fs')
var test = require('tap').test
var chest = require('../lib/main')
var dummyFileName = 'metafile'
var dummyBowerJson = 'bower.json'
var chestignore = '.chestignore'

test('open metafiles', function (t) {
  chest.open()
  var files = fs.readdirSync('./')
  t.equal(files.indexOf(dummyFileName), -1)
  t.notEqual(files.indexOf(dummyBowerJson), -1)
  t.equal(files.indexOf(chestignore), -1)
  t.end()
})
