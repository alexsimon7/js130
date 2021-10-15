function makeList() {
  let todoList = [];
  return (todo) => {
    if(!todo) {
      if(todoList.length === 0) {
        console.log('The list is empty.');
      } else {
        todoList.forEach(element => console.log(element));
      }
    } else {
      if(todoList.includes(todo)) {
        todoList.splice(todoList.indexOf(todo), 1);
        console.log(todo + ' removed!');
      } else {
        todoList.push(todo);
        console.log(todo + ' added!');
      } 
    }
  }
}

let list = makeList();
list();
//The list is empty.

list("make breakfast");
//make breakfast added!

list("read book");
//read book added!

list();
//make breakfast
//read book

list("make breakfast");
//make breakfast removed!

list();
//read book