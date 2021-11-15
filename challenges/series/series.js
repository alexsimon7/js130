'use strict';

class Series{
  constructor(numberString) {
    this.numberString = numberString;
  }

  slices(substringLength) {
    if(substringLength > this.numberString.length) {
      throw Error;
    }

    let answer = [];

    for(let index = 0; index < this.numberString.length; index++) {
      if(this.numberString.slice(index, index + substringLength).length === substringLength) {
        answer.push(this.numberString.slice(index, index + substringLength).split('').map(Number));
      }
    }

    return answer;
  }

}


module.exports = Series;
