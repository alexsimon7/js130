'use strict';

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples: [3, 5];
  }

  static to(naturalNumber) {
    let obj = new SumOfMultiples();
    return obj.to(naturalNumber);
  }

  to(naturalNumber) {
    let list = [];

    for(let currentNumber = 1; currentNumber < naturalNumber; currentNumber++) {
      this.multiples.forEach(element => {
        if(currentNumber % element === 0 && !(list.includes(currentNumber))) {
          list.push(currentNumber)
        }
      });
    };

    return list.reduce((accum, ele) => accum + ele, 0);
  }
}


module.exports = SumOfMultiples;
