module.exports = function () {
  var message = '';
  message += 'Usage:\n';
  message += '    chest usage            Show this message\n';
  message += '    chest put <file>       Put specified config file in the chest\n';
  message += '    chest list             Show list of config files in the chest\n';
  message += '    chest open             Place config files from the chest into the project root as symbolic links\n';
  message += '    chest install          Install all supported config files\n';
  message += '    chest close            Remove symbolic links created by "open"\n';
  console.log(message);
};
