'strict mode';

function makeList() {
  return {
    todoList: [],

    list() {
      if(this.todoList.length === 0) {
        console.log('The list is empty.');
      } else {
        this.todoList.forEach(element => console.log(element));
      }
    },
    
    add(todo) {
      let index = this.todoList.indexOf(todo);
      if(index === -1) {
        this.todoList.push(todo);
        console.log(todo + ' added!');
      }
    },

    remove(todo) {
      let index = this.todoList.indexOf(todo);
      if(index !== -1) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
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