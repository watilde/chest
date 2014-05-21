# Chest

[![Build Status](https://travis-ci.org/watilde/chest.png?branch=master)](https://travis-ci.org/watilde/chest)

Put your config files in chest

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
    chest close        Remove symbolic links created by "open"
