'use strict';

class CustomSet {
  constructor(array = []) {
    this.set = array;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(array) {
    return this.set.filter(element => !(array.contains(element))).length === 0;
  }

  isDisjoint(array) {
    if (this.isEmpty() || array.isEmpty()) {
      return true;
    } else {
      return !(this.set.some(element => array.contains(element)));
    }
  }

  isSame(array) {
    return this.set.every(element => array.contains(element)) &&
      this.set.length === array.set.length;
  }

  add(element) {
    if (!(this.contains(element))) {
      this.set.push(element);
    }
    return this;
  }

  intersection(array) {
    return new CustomSet(this.set.filter(element => array.contains(element)));
  }

  difference(array) {
    return new CustomSet(this.set.filter(element =>
      !(array.contains(element))));
  }

  union(array) {
    array.set.forEach(element => {
      this.add(element);
    });

    return this;
  }

}

module.exports = CustomSet;