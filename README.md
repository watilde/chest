# chest

The easy metafile manager

## Badges
+ [![Build Status](https://api.travis-ci.org/watilde/chest.svg)](https://travis-ci.org/watilde/chest)
+ [![Dependency Status](https://gemnasium.com/watilde/chest.svg)](https://gemnasium.com/watilde/chest)



## Install

Using npm.

    $ npm install -g chest

Confirm.

    $ chest usage

## Usage

    chest usage        Show this message
    chest put <file>   Put specified config file in the chest
    chest take <file>  Take specified config file from the chest into the project root
    chest list         Show list of config files in the chest
    chest open         Place config files from the chest into the project root as symbolic links
    chest install      Install all supported config files in the chest
    chest postinstall  Open and install
    chest close        Remove symbolic links created by "open"

## Sample
### package.json
Make bower and component install easy to use with `postinstall`:
```
{
  "scripts": {
    "postinstall": "chest postinstall",
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
> ./bin/chest.js postinstall

bower bootstrap#~3.1.1    cached git://github.com/twbs/bootstrap.git#3.1.1
bower bootstrap#~3.1.1    validate 3.1.1 against git://github.com/twbs/bootstrap.git#~3.1.1
bower jquery#>= 1.9.0     cached git://github.com/jquery/jquery.git#2.1.1
bower jquery#>= 1.9.0     validate 2.1.1 against git://github.com/jquery/jquery.git#>= 1.9.0
bower bootstrap#~3.1.1    install bootstrap#3.1.1
bower jquery#>= 1.9.0     install jquery#2.1.1
```
