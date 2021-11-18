'use strict';

class Clock {
  constructor(hourHand, minuteHand = 0) {
    this.time = [hourHand, minuteHand];
  }

  static at(hourHand, minuteHand) {
    return new Clock(hourHand, minuteHand);
  }

  toString() {
    let fixedHour = String(this.time[0]).length === 1 ? '0' + String(this.time[0]) : String(this.time[0]);
    let fixedMinute = String(this.time[1]).length === 1 ? '0' + String(this.time[1]) : String(this.time[1]);

    return `${fixedHour}:${fixedMinute}`;
  }

  add(amount) {
    this.time[1] += amount;
    this.rectifyMinutes();
    this.rectifyHours();
    return this;
  }

  subtract(amount) {
    this.time[1] -= amount;
    this.rectifyMinutes();
    this.rectifyHours();
    return this;
  }

  rectifyMinutes() {
    if (this.time[1] > 60) {
      this.time[0] += Math.floor(this.time[1] / 60);
      this.time[1] %= 60;
    } else if (this.time[1] < 0) {
      if (this.time[1] >= -59) {
        this.time[0] -= 1;
        this.time[1] = 60 - (Math.abs(this.time[1]));
      } else if (this.time[1] < -59) {
        this.time[0] -= (Math.floor(Math.abs(this.time[1]) / 60) + 1);
        this.time[1] = 60 - (Math.abs(this.time[1]) % 60);
      }
    }
    return this;
  }

  rectifyHours() {
    if (this.time[0] >= 24) {
      this.time[0] %= 24;
    } else if (this.time[0] < 0) {
      if (this.time[0] >= -23) {
        this.time[0] = 24 - Math.abs(this.time[0]);
      } else if (this.time[0] < -23) {
        this.time[0] = 24 - (Math.abs(this.time[0]) % 24);
      }
    }
    return this;
  }

  isEqual(secondClock) {
    return this.time.every((element, index) => element ===
      secondClock.time[index]);
  }
}

module.exports = Clock;