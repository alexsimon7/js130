let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); //logs 1
console.log(incrementCounter()); //logs 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // logs 3
console.log(incrementCounter()); // logs 4

// Because the variable 'counter' is in the global scope, it's 
// value is set to 0 once. Closure makes sure that the function
// returned by  'makeCounter' contains an envelope with a pointer
// to the global 'counter' variable.
