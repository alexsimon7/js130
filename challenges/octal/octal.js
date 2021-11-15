'use strict';

class Octal {
  constructor(number) {
    this.number = number;
  }

  validInput(string) {
    return string.split('').every(element => +element <= 7);
  }

  toDecimal() {
    if(!(this.validInput(this.number))) {
      return 0;
    }

    let answer = 0;
    let powerTrack = this.number.length - 1;

    for (let index = 0; index < this.number.length; index++) {
      answer += (+(this.number[index])) * 8 ** (powerTrack - index);
    }

    return answer;
  }
}

module.exports = Octal;