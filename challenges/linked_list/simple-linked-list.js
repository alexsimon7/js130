'use strict';

class Element {
  constructor(data, nextData = null) {
    this.data = data;
    this.nextData = nextData;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextData;
  }

  isTail() {
    return this.next() === null;
  }

}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(array) {
    let arrayList = new SimpleLinkedList();

    if (array === null || array.length === 0) {
      return arrayList;
    } else {
      for (let index = array.length - 1; index >= 0; index--) {
        arrayList.push(array[index]);
      }
      return arrayList;
    }
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(number) {
    if (this.size() >= 1) {
      let toPush = new Element(number, this.list[this.size() - 1]);
      this.list.push(toPush);
    } else {
      let toPush = new Element(number);
      this.list.push(toPush);
    }
  }

  peek() {
    return this.isEmpty() ? null : this.list[this.size() - 1].datum();
  }

  head() {
    if (this.size() > 0) {
      return this.list[this.size() - 1];
    } else {
      return null;
    }
  }

  pop() {
    return this.list.pop().datum();
  }

  toArray() {
    let array = [];

    if (this.isEmpty()) {
      return array;
    } else {
      for (let index = this.size() - 1; index >= 0; index--) {
        array.push(this.list[index].datum());
      }

      return array;
    }
  }

  reverse() {
    let reversedArray =  [...this.toArray()].reverse();
    return SimpleLinkedList.fromArray(reversedArray);
  }

}

module.exports = { SimpleLinkedList, Element };
