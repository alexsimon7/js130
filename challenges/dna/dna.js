'use strict';

class DNA {
  constructor(strand) {
    this.firstDNA = strand;
  }

  hammingDistance(secondDNA) {
    let numberOfDifferences = 0;

    let useLength = this.firstDNA.length > secondDNA.length ? secondDNA.length: this.firstDNA.length;

    for(let index = 0; index < useLength; index++) {
      if(this.firstDNA[index] !== secondDNA[index]) {
        numberOfDifferences += 1;
      }
    }
    return numberOfDifferences;
  }
}


module.exports = DNA;
