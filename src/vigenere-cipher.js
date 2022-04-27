const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(type = true) {
    this.type = type
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let newStr = ''
    let keyIndex = 0
    let i = 0
    for (let j = 0; j < message.length; j++) {
      if(this.alphabet.includes(message[j].toUpperCase())) {
        keyIndex = this.alphabet.indexOf(message[j].toUpperCase()) + this.alphabet.indexOf(key[i].toUpperCase())
        keyIndex < this.alphabet.length ? newStr += this.alphabet.charAt(keyIndex) : newStr += this.alphabet.charAt(keyIndex - this.alphabet.length)
        i++
        if (key.length <= i) i = 0
      } else {
        newStr += message[j]
      }
    }
    return this.type ? newStr : newStr.split('').reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let newStr = ''
    let keyIndex = 0
    let i = 0
    for (let j = 0; j < message.length; j++) {
      if(this.alphabet.includes(message[j].toUpperCase())) {
        keyIndex = this.alphabet.indexOf(message[j].toUpperCase()) - this.alphabet.indexOf(key[i].toUpperCase())
        keyIndex >= 0 ? newStr += this.alphabet.charAt(keyIndex) : newStr += this.alphabet.charAt(keyIndex + this.alphabet.length)
        i++
        if (key.length <= i) i = 0
      } else {
        newStr += message[j]
      }
    }
    return this.type ? newStr : newStr.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
