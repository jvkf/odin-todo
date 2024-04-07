export default class TodoProject {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  getTodos() {
    return [...this.todos];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  findTodoIndex(todo) {
    const selectedTodoTitle = todo.title;

    return this.todos.findIndex((todoEl) => todoEl.title === selectedTodoTitle);
  }

  removeTodo(todo) {
    const index = this.findTodoIndex(todo);
    this.todos.splice(index, 1);
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }
}
