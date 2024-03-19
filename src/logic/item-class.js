export default class ToDoItem {
  constructor({ title, description, dueDate, priority }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }

  update({
    title = this.title,
    description = this.description,
    dueDate = this.dueDate,
    priority = this.priority,
    complete = this.complete,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}
