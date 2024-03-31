import { createAppData } from "./localStorage";

export default class TodoProject {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  getTodos() {
    return [...this.todos];
  }

  addTodo(todo, isAddingFromDOM = true) {
    this.todos.push(todo);
    if (isAddingFromDOM) {
      createAppData();
    }
  }

  findTodoIndex(todo) {
    let selectedTodoTitle = todo.title;

    return this.todos.findIndex((todo) => todo.title === selectedTodoTitle);
  }

  removeTodo(todo) {
    const index = this.findTodoIndex(todo);
    this.todos.splice(index, 1);
    createAppData();
  }

  updateTitle(newTitle) {
    this.title = newTitle;
    createAppData();
  }
}
