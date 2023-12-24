const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  let count = matrix[0].length

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < count; j++) {
      if (matrix[i][j] === 0) {
        for (let g = i + 1; g < matrix.length; g++) {
          matrix[g][j] = 0;
        }
      }
    }
  }

  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[a].length; b++) {
      result += matrix[a][b]
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
