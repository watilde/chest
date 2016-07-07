'use strict'
var fs = require('fs')
var rimraf = require('rimraf')
var test = require('tap').test
var dummyFileName = 'metafile'
var dummyBowerJson = 'bower.json'
var chestignore = '.chestignore'
var bowerJson = {
  name: 'name',
  description: 'description',
  version: 'version'
}

test('setup', function (t) {
  if (fs.existsSync('.chest')) {
    rimraf.sync('.chest')
  }
  fs.writeFileSync(
    dummyBowerJson,
    JSON.stringify(bowerJson, 2, 2)
  )
  fs.writeFileSync(
    dummyFileName,
    'Hello World!'
  )
  fs.writeFileSync(
    chestignore,
    dummyFileName
  )
  t.end()
})
