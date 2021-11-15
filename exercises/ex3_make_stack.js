function newStack() {
  let stack = [];
  return {
    push(element) {
      stack.push(element);
    },

    pop() {
      return stack.pop()
    },

    printStack() {
      stack.forEach(element => console.log(element));
    },
  };
}


let stack = newStack();

stack.printStack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

stack.printStack();
