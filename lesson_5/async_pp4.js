setTimeout(function() {  // 1
  setTimeout(function() { // a
    q(); // #7
  }, 15);

  d(); // #3

  setTimeout(function() { // b
    n(); // #5
  }, 5);

  z(); // #4
}, 10);

setTimeout(function() { // 2
  s(); // #6
}, 20);

setTimeout(function() { // 3
  f(); // #2
});

g(); // #1
