'use strict';

class Robot {
  static names = [];

  name() {
    if (this.currentName) return this.currentName;

    this.currentName = this.generateName();

    while (Robot.names.includes(this.currentName)) {
      this.currentName = this.generateName();
    }

    Robot.names.push(this.currentName);

    return this.currentName;
  }


  reset() {
    let index = Robot.names.indexOf(this.currentName);
    Robot.names.splice(index, 1);

    this.currentName = null;

  }

  generateName() {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let name = new Array(5).fill('0');

    return name.map((_element, index) => {
      if (index === 0 || index === 1) {
        return alpha[Math.floor(Math.random() * 26)];
      } else {
        return Math.floor(Math.random() * 10);
      }
    }).join('');

  }
}

module.exports = Robot;