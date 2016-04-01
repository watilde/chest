# chest

The Easy Metafile Manager

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/chest.svg)](https://www.npmjs.org/package/chest)
+ [![NPM Downloads](http://img.shields.io/npm/dm/chest.svg)](https://www.npmjs.org/package/chest)
+ [![Build Status](https://api.travis-ci.org/watilde/chest.svg)](https://travis-ci.org/watilde/chest)
+ [![Dependency Status](https://gemnasium.com/watilde/chest.svg)](https://gemnasium.com/watilde/chest)
+ [![MIT LICENSE](http://img.shields.io/npm/l/chest.svg)](https://github.com/watilde/chest/blob/master/LICENSE)

## Usage
```
Usage: chest <command>


Commands:

  put [files...]   Put specified config file in the chest
  take [files...]  Take specified config file from the chest into the project root
  list             Show list of config files in the chest
  open             Place config files from the chest into the project root as symbolic links
  close            Remove symbolic links created by "open"

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

## Examples
chest command is here to support you to take and put files to a directory called `.chest` easily. Here are some use cases.

### dotfiles
Manage your dotfiles:
```
$ git clone git@github.com:your/dotfiles.git .chest

$ ls
.chest

$ ls .chest
.emacs.d .tmux.conf .vimrc .zshrc

$ chest open
.emacs.d .chest .tmux.conf .vimrc .zshrc
```

### metafiles
Manage metafiles:
```
$ ls
index.js package.json metafile_a metafile_b

$ chest put metafile_a metafile_b

$ ls
.chest index.js package.json

$ chest list
metafile_a metafile_b

$ chest open
.chest index.js package.json metafile_a metafile_b
```

## chestignore
To ignore some files, you need to add `.chestignore`.
```
.git
.gitignore
```

## Install
With npm, to get the command do:
```
$ npm install -g chest
```
## License
MIT
