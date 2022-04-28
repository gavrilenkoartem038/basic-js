const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}
   let domArr = domains.map(domain => {
    let temp = ''
    let dom = domain.split('.').reverse().map(el => {
      temp += `.${el}`
      return temp
    })
    return dom}).flat()
  domArr.forEach(el =>{
    if (`${el}` in obj) {
      obj[el] += 1
    } else {
      obj[el] = 1
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
