function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // logs 1
console.log(incrementCounter()); // logs 1

incrementCounter = makeCounter();
console.log(incrementCounter()); // logs 1
console.log(incrementCounter()); // logs 1
