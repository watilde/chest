var path = require('path')

module.exports = {
  paths: {
    root: path.resolve(process.cwd()),
    rootin: path.resolve(process.cwd()) + '/',
    chest: path.resolve(process.cwd() + '/.chest/'),
    chestin: path.resolve(process.cwd() + '/.chest/') + '/',
    chestignore: path.resolve(process.cwd() + '/.chest/', '.chestignore'),
    gitignore: path.resolve(process.cwd() + '/.gitignore')
  }
}
