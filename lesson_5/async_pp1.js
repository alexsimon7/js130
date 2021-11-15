function delayLog() {
  for(let number = 1; number <= 10; number++) {
    setTimeout(function() {
      console.log(number);
    }, number * 1000);
  }
}

delayLog();
