'use strict';

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(array) {
    let answer = [];
    for(let arrIndex = 0; arrIndex < array.length; arrIndex++) {
      let workingString = this.word.toLowerCase();
      
      if(workingString.length !== array[arrIndex].length) {
        continue;
      }

      for(let wordIndex = 0; wordIndex < array[arrIndex].length; wordIndex++) {
        if(workingString.includes(array[arrIndex][wordIndex].toLowerCase())) {
          workingString = workingString.replace(array[arrIndex][wordIndex].toLowerCase(), '');
          console.log(workingString);
        }
      }

      if(workingString.length === 0 && this.word.toLowerCase() !== array[arrIndex].toLowerCase()) {
        answer.push(array[arrIndex]);
      }
    };

    return answer;

  }
}

module.exports = Anagram;
