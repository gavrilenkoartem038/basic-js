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
  let arr = str.split('')
  let newArr = []
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    index++
    if (arr[i] != arr[i + 1]) {
      if (index != '1') newArr.push(index)
      newArr.push(arr[i])
      index = 0
    }
  }
  return newArr.join('')
}

module.exports = {
  encodeLine
};
