const env = process.env;
const moduleScope = ['__dirname', '__filename'];
const regex = new RegExp(/\${(.*?)}/g);

/**
 * Replace matched value and return string.
 *
 * @module envsubstr
 * @example
 *
 * import parser from 'envsubstr';
 * parser('${USER}');
 *
 * @param {String} data
 * @returns {String}
 * @throws {Error} Environment variable not found.
 */
function parser(data) {
  var match;
  while (match = regex.exec(data)) {
    var value;
    if (moduleScope.indexOf(match[1]) === -1) {
      value = env[match[1]];
    }
    if (!value) {
      throw Error('Missing env ' + match[1]); // exception
    }
    data = data.replace(match[0], value);
  }
  return data;
}

module.exports = parser;

