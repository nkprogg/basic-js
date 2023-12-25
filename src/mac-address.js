const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const array = n.split('-');
  const regex = /^[0-9A-F]$/i;


  if (array.length === 6) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length === 2) {
        for (let j = 0; j < array[i].length; j++) {
          if (!regex.test(array[i][j])) {
            return false;
          }
        }
      } else {
        return false;
      }

      return true;
    }
  } else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
