module.exports = function () {
  var message = '';
  message += 'Usage:\n';
  message += '    chest usage            Show this message\n';
  message += '    chest put <file>       Put config file to chest\n';
  message += '    chest list             List of config files in the chest\n';
  message += '    chest open             Take config files to project root\n';
  message += '    chest boost            Using all of config file like install\n';
  message += '    chest close            Remove config files if it is same with one of chest\n';
  console.log(message);
};
