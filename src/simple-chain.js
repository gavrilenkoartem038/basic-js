const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chain = []

const chainMaker = {
  getLength() {
    return chain.length
  },
  addLink(value) {
    chain.push(`( ${value} )`)
    return this
  },
  removeLink(pos) {
    if (typeof pos != 'number' || pos > chain.length || pos <= 0) {
      chain = []
      throw new Error('You can\'t remove incorrect link!');
    }
    chain.splice(pos - 1, 1)
    return this
  },
  reverseChain() {
    chain.reverse()
    return this
  },
  finishChain() {
    let str = chain.join('~~')
    chain = []
    return str
  }
};

module.exports = {
  chainMaker
};
