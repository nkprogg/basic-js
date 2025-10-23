const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const doubleNext = '--double-next';
  const discardPrev = '--discard-prev';
  const discardNext = '--discard-next';
  const doublePrev = '--double-prev';

  const newArray = [...arr];

  for (let index = 0; index < newArray.length; index++) {
    switch (newArray[index]) {
      case doubleNext:
        if (index < newArray.length - 1) {
          newArray.splice(index, 1, newArray[index + 1]);
        } else {
            newArray.splice(index, 1);
          }
        break;

      case discardPrev:
        if (index === 0) {
          newArray.splice(index, 1);
        } else {
          newArray.splice(index - 1, 2);
        }
        break;

      case discardNext:
        if (index === newArray.length) {
          newArray.splice(index, 1);
        } else {
          newArray.splice(index, 2);
          index = index - 1;
        }
        break;

      case doublePrev:
        if (index === 0) {
          newArray.splice(index, 1);
        } else {
          newArray.splice(index, 1, newArray[index - 1]);
        }
        break;
    }
  }

  return newArray;
}

module.exports = {
  transform
};
