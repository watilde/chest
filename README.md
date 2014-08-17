# chest

The Easy Metafile Manager

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/chest.svg)](https://www.npmjs.org/package/chest)
+ [![Build Status](https://api.travis-ci.org/watilde/chest.svg)](https://travis-ci.org/watilde/chest)
+ [![Dependency Status](https://gemnasium.com/watilde/chest.svg)](https://gemnasium.com/watilde/chest)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/watilde/chest/blob/master/LICENSE)


## Install

Using npm.

    $ npm install -g chest

Confirm.

    $ chest usage

## Usage

    chest usage       Show this message
    chest put <file>  Put specified config file in the chest
    chest take <file> Take specified config file from the chest into the project root
    chest list        Show list of config files in the chest
    chest open        Place config files from the chest into the project root as symbolic links
    chest install     Install all supported config files in the chest
    chest boost       Open and install
    chest close       Remove symbolic links created by "open"
    chest scripts      Show list of chest-run-scripts
    chest run <script> Run chest-run-scripts
    chest sync         Sync meta info name, description and version

## Sample
### chest put <file>
Put metafile in the chest
```
$ cat bower.json
{
  "devDependencies": {
      "bootstrap": "~3.1.1"
  }
}

$ chest put bower.json
```

### package.json
Make bower and component install easy to use with `postinstall`:
```
{
  "scripts": {
    "postinstall": "chest boost",
    "test": "mocha test/*.js"
  },
  "devDependencies": {
    "mocha": "*",
    "chest": "*"
  },
}
```
### npm install
Then if `bower.json` is in the chest, `bower install` is executed after `npm install`:
```
$ npm install

> chest@0.1.0
> ./bin/chest.js boost

bower bootstrap#~3.1.1    cached git://github.com/twbs/bootstrap.git#3.1.1
bower bootstrap#~3.1.1    validate 3.1.1 against git://github.com/twbs/bootstrap.git#~3.1.1
bower jquery#>= 1.9.0     cached git://github.com/jquery/jquery.git#2.1.1
bower jquery#>= 1.9.0     validate 2.1.1 against git://github.com/jquery/jquery.git#>= 1.9.0
bower bootstrap#~3.1.1    install bootstrap#3.1.1
bower jquery#>= 1.9.0     install jquery#2.1.1
```

### chest.json
chest.json
```
// Supported json5 syntax
{
    name: "name",
    description: "description",
    version: "0.1.0",
    scripts: {
      answer: {
        usage: "The answer to life the universe and everything",
        run: "touch 42"
      }
    }
  }
}
```

#### chest run scripts
Command rapper required usage
```
$ chest run answer
touch 42
```

#### chest sync meta info
Sync both metainfo
```
$ chest sync
Sync name, description and version
=> update package.json, bower.json, component.json
```

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
