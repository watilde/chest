# chest

The Easy Metafile Manager

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/chest.svg)](https://www.npmjs.org/package/chest)
+ [![NPM Downloads](http://img.shields.io/npm/dm/chest.svg)](https://www.npmjs.org/package/chest)
+ [![Build Status](https://api.travis-ci.org/watilde/chest.svg)](https://travis-ci.org/watilde/chest)
+ [![Dependency Status](https://gemnasium.com/watilde/chest.svg)](https://gemnasium.com/watilde/chest)
+ [![MIT LICENSE](http://img.shields.io/npm/l/chest.svg)](https://github.com/watilde/chest/blob/master/LICENSE)

## Example
```
$ ls
index.js package.json metafile_a metafile_b

$ chest put metafile_a metafile_b

$ ls -la
.chest index.js package.json

$ chest list
metafile_a metafile_b

$ chest open
.chest index.js package.json metafile_a metafile_b
```

## Usage
```
chest usage       Show this message
chest put <file>  Put specified config file in the chest
chest take <file> Take specified config file from the chest into the project root
chest list        Show list of config files in the chest
chest open        Place config files from the chest into the project root as symbolic links
chest close       Remove symbolic links created by "open"
```

## Install
With npm, to get the command do:
```
$ npm install -g chest
```
## License
MIT
