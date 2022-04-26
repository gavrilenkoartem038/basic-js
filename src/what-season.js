const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!'
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  } else {
    if(date.getMonth() < 2 || date.getMonth() == 11) return 'winter';
    if(date.getMonth() >= 2 && date.getMonth() < 5) return 'spring';
    if(date.getMonth() >= 5 && date.getMonth() < 8) return 'summer';
    if(date.getMonth() >= 8 && date.getMonth() < 11) return 'autumn'; 
  }
}

module.exports = {
  getSeason
};
