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
  let arr = n.toString().split('')
  let ind = arr.findIndex((el,index) => el < arr[index+1])
  ind > -1 ? arr.splice(ind, 1) : arr.splice(arr.length -1, 1)
  return +arr.join('')
}

module.exports = {
  deleteDigit
};
