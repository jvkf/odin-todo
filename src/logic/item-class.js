import { createAppData } from "./localStorage";

export default class ToDoItem {
  constructor({ title, description, dueDate, priority, complete = false }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  update({ title, description, dueDate, priority }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    createAppData();
  }

  toggleComplete() {
    this.complete = !this.complete;
    createAppData();
  }
}
