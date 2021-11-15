'use strict';

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  constructor(num) {
    this.number = num;
  }

  toRoman() {
    let romanNumber = '';
    let stringNumber = this.number.toString();

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(stringNumber / value);
      let remainder = stringNumber % value;

      if(multiplier > 0) {
        romanNumber += (numeral.repeat(multiplier));
      }

      stringNumber = remainder;
    });

    return romanNumber; 
  }
}

let test = new RomanNumeral(49);
test.toRoman();

module.exports = RomanNumeral;