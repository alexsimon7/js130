function makeMultipleLister(number) {
  return function() {
    for(let answer = number; answer < 100; answer += number) {
      console.log(answer);
    }
  }
}

let lister = makeMultipleLister(17);
lister();
