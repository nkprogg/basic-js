const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      return Number(array.slice(i + 1).join(''));
    } else if (array[i] > array[i + 1]) {
      Number(array.splice(i + 1, 1).join(''));
      return Number(array.join(''));
    }
  }

  return 123;
}

module.exports = {
  deleteDigit
};
