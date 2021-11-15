'use strict';

class Triangle {
  constructor(one, two, three) {
    this.one = one;
    this.two = two;
    this.three = three;

    if(this.isInvalid()) {
      throw Error('Invalid triangle lengths');
    }
  }

  kind() {
    if([this.one, this.two, this.three].every((element, _index, array) => array[0] === element)) {
      return 'equilateral';
    } else if( this.one !== this.two && this.two !== this.three && this.three !== this.one) {
      return 'scalene';
    } else {
      return 'isosceles'
    }
  }
  
  isInvalid() {
    return (this.one <= 0 || this.two <= 0 || this.three <= 0) ||  
    (!((this.one +  this.two) > this.three) || 
    !((this.two +  this.three) > this.one) || !((this.one +  this.three) > this.two));
  }
}

module.exports = Triangle;
