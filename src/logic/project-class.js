import ToDoItem from "./item-class";

export default class TodoProject {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todoForm) {
    const newTodoItem = new ToDoItem(todoForm);
    this.todos.push(newTodoItem);
  }

  removeTodo(id) {
    this.todos.splice(id, 1);
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }
}
