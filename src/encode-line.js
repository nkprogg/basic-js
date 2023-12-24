const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const result = [];

  let currentElement = array[0];
  let counter = 1;

  for (let i = 1; i < array.length + 1; i++) {
    if (currentElement === array[i]) {
      counter++;
    } else {
      result.push(counter !== 1 ? counter + currentElement : currentElement);
      currentElement = array[i];
      counter = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
