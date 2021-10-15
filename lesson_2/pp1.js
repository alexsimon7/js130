var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

//The code first declares a function expression to the variable foo on
//line 1-3.  Then, a function declaration (also named foo) is declared
//on line 5-7.  Because function declarations get hoisted above variables
//(including those that are function expressions) the code logs 'Bye' 
//because the function expressions is the operative function.
