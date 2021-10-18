(function foo() {
  console.log('Bar');
})();

foo() // ?


//The foo function is not visible outside of the scope created by the IIFE.
//Accordingly, the foo function is not visible in the global scope.
