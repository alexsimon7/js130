function makeCounterLogger(start) {
  return (endNumber) => {
    let workingNumber = start;
    
    if(workingNumber > endNumber) {
      while(endNumber <= workingNumber) {
        console.log(workingNumber);
        workingNumber -= 1
      }
    } else {
      while(endNumber >= workingNumber) {
        console.log(workingNumber);
        workingNumber += 1;
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
5
6
7
8

> countlog(2);
5
4
3
2