function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // logs 1
console.log(incrementCounter()); // logs 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // logs 1
console.log(incrementCounter()); // logs 2
