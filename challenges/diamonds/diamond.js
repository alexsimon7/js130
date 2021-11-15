'use strict';

class Diamond{
  static DIAMOND_LIST = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  static makeDiamond(letter) {
    let middleLength = (this.DIAMOND_LIST.indexOf(letter) * 2) + 1;

    if(letter === 'A') {
      return 'A\n';
    }


    let answer = '';

    for(let index = 0; index < this.DIAMOND_LIST.indexOf(letter); index++) {
      if(this.DIAMOND_LIST[index] === 'A') {
        answer += ' '.repeat((middleLength - 1) / 2) + 'A' + ' '.repeat((middleLength - 1) / 2) + '\n';
      } else {
        answer += ' '.repeat(((middleLength - 1) / 2) - index) + this.DIAMOND_LIST[index] + ' '.repeat(((index - 1) * 2) + 1) + 
        this.DIAMOND_LIST[index] + ' '.repeat(((middleLength - 1) / 2) - index) + '\n';
      }
    }

    answer += letter + ' '.repeat(middleLength - 2) + letter + '\n';

    for(let index = this.DIAMOND_LIST.indexOf(letter) - 1; index >= 0; index--) {
      if(this.DIAMOND_LIST[index] === 'A') {
        answer += ' '.repeat((middleLength - 1) / 2) + 'A' + ' '.repeat((middleLength - 1) / 2) + '\n';
      } else {
        answer += ' '.repeat(((middleLength - 1) / 2) - index) + this.DIAMOND_LIST[index] + ' '.repeat(((index - 1) * 2) + 1) + 
        this.DIAMOND_LIST[index] + ' '.repeat(((middleLength - 1) / 2) - index) + '\n';
      }
    }


    return answer;
  }
}


module.exports = Diamond;
