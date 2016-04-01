'use strict'
var fs = require('fs')
var rimraf = require('rimraf')
var test = require('tap').test
var dummy_file_name = 'metafile'
var dummy_bower_json = 'bower.json'
var chestignore = '.chestignore'
var bower_json = {
  name: 'name',
  description: 'description',
  version: 'version'
}

test('setup', function (t) {
  if (fs.existsSync('.chest')) {
    rimraf.sync('.chest')
  }
  fs.writeFileSync(
    dummy_bower_json,
    JSON.stringify(bower_json, 2, 2)
  )
  fs.writeFileSync(
    dummy_file_name,
    'Hello World!'
  )
  fs.writeFileSync(
    chestignore,
    dummy_file_name
  )
  t.end()
})
