'use strict';

class PerfectNumber {
  static classify(num) {
    
    if(num < 0) {
      throw new Error('Negative Number!')
    }
    
    let sum = 0;
    for (let currentNumber = 1; currentNumber < num; currentNumber++) {
      if (num % currentNumber === 0) {
        sum += currentNumber;
      }
    }
    
    if(sum === num) {
      return 'perfect';
    } else {
      return sum < num ? 'deficient': 'abundant';
    }
  }
}



module.exports = PerfectNumber;
