function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); //prod is set to 2 in the closure, bar is set to return function
let result = bar(3); // result = 6; prod equals 6
result += bar(4); // result = 30; prod = 24
result += bar(5); //  result = 150; prod = 120
console.log(result); // logs 150