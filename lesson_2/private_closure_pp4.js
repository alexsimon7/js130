'strict mode';

function makeList() {
  let todoList = [];
  return {
    list() {
      if(todoList.length === 0) {
        console.log('The list is empty.');
      } else {
        todoList.forEach(element => console.log(element));
      }
    },
    
    add(todo) {
      let index = todoList.indexOf(todo);
      if(index === -1) {
        todoList.push(todo);
        console.log(todo + ' added!');
      }
    },

    remove(todo) {
      let index = todoList.indexOf(todo);
      if(index !== -1) {
        todoList.splice(todoList.indexOf(todo), 1);
        console.log(todo + ' removed!');
      }
    },
  };
}


let list = makeList();
list.add("peas");
//peas added!

list.list();
//peas

list.add("corn");
//corn added!

list.list();
//peas
//corn

list.remove("peas");
//peas removed!

list.list();
//corn

console.log(list.todoList);

