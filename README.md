# chest

The Easy Metafile Manager

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/chest.svg)](https://www.npmjs.org/package/chest)
+ [![NPM Downloads](http://img.shields.io/npm/dm/chest.svg)](https://www.npmjs.org/package/chest)
+ [![Build Status](https://api.travis-ci.org/watilde/chest.svg)](https://travis-ci.org/watilde/chest)
+ [![Dependency Status](https://gemnasium.com/watilde/chest.svg)](https://gemnasium.com/watilde/chest)
+ [![MIT LICENSE](http://img.shields.io/npm/l/chest.svg)](https://github.com/watilde/chest/blob/master/LICENSE)


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
    chest close       Remove symbolic links created by "open"
    chest scripts      Show list of chest-run-scripts
    chest run <script> Run chest-run-scripts
    chest sync         Sync meta info name, description and version

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Added some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
