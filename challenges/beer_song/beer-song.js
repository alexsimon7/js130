'use strict';

class BeerSong {

  static verse(number) {
    if(number > 2) {
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\n` +
      `Take one down and pass it around, ${number - 1} bottles of beer ` +
      "on the wall.\n";
    } else if (number === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n";
    } else if (number === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n";
    } else if(number === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(start, finish) {
    let song = '';
    for(let bottleNumber = start; bottleNumber >= finish; bottleNumber--) {
      if (bottleNumber !== finish) {
        song += (this.verse(bottleNumber) + '\n');
      } else {
        song += this.verse(bottleNumber);
      }
    }
    return song;
  }

  static lyrics() {
    return this.verses(99, 0);
  }

}



module.exports = BeerSong;
