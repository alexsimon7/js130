function delayLog() {
  for(var number = 1; number <= 10; number++) {
    setTimeout(function() {
      console.log(number);
    }, number * 1000);
  }
}

delayLog();

//The callback function of 'setTimeout' does not get called until long after
//the loop finishes. Because the variable number is called with var, each
//loop uses the same number variable, with a value of 11.
