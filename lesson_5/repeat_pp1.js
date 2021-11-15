function startCounting() {
  let number = 1;
  setInterval(function() {
    console.log(number);
    number += 1;
  }, 1000);
}

startCounting();
