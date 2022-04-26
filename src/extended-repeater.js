const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionArr = new Array(options.additionRepeatTimes).fill(options.addition === null ?'' + options.addition : options.addition)
  let additionStr = ''
  options.additionSeparator == undefined ? additionStr = str + additionArr.join(`|`) : additionStr = str + additionArr.join(`${options.additionSeparator}`)
  const Arr = new Array(options.repeatTimes).fill(additionStr)
  return options.separator == undefined ? Arr.join(`+`) : Arr.join(`${options.separator}`)
}

module.exports = {
  repeater
};
