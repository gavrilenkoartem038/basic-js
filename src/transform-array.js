const { NotImplementedError } = require('../extensions/index.js');

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
function transform(startArray) {
  if(!Array.isArray(startArray)) throw new Error("'arr' parameter must be an instance of the Array!")

  let arr = [];
  for(let i = 0; i < startArray.length; i++) {
    switch(startArray[i]) {
      case '--discard-next':
        (startArray[i + 2] == '--double-prev' || startArray[i + 2] == '--discard-prev') ? i += 2 : i += 1;
        break;
      case '--discard-prev':
        arr.pop()
        break;
      case '--double-next':
        if (i != startArray.length - 1) arr.push(startArray[i + 1])
        break;
      case '--double-prev':
        if (i != 0) arr.push(startArray[i - 1])
        break;
      default:
        arr.push(startArray[i])
    }
  }
  return arr
}

module.exports = {
  transform
};
