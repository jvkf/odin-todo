import { format, formatDistanceToNow } from "date-fns";
import { app } from "..";
import editTodoHandler from "../dom/editTodo";
import loadTodos from "../dom/loadTodos";

export default function todoCard(todo) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const ellipsisContainer = document.createElement("div");
  ellipsisContainer.classList.add("todo-item__ellipsis-container");

  const ellipsisBtn = document.createElement("button");
  ellipsisBtn.setAttribute("type", "button");
  ellipsisBtn.classList.add("todo-item__ellipsis-btn");
  ellipsisBtn.innerHTML = `
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <span class="sr-only">Todo Options</span>
  `;

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("todo-item__menu-container");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.classList.add("todo-item__edit-btn");
  editBtn.textContent = "Edit";

  const removeBtn = document.createElement("button");
  removeBtn.setAttribute("type", "button");
  removeBtn.classList.add("todo-item__remove-btn");
  removeBtn.textContent = "Remove";

  menuContainer.appendChild(editBtn);
  menuContainer.appendChild(removeBtn);
  ellipsisContainer.appendChild(ellipsisBtn);
  ellipsisContainer.appendChild(menuContainer);

  const container = document.createElement("div");
  container.classList.add("todo-item__container");

  const title = document.createElement("h2");
  title.classList.add("todo-item__title");
  title.innerHTML = `<span class="sr-only">Title:</span> ${todo.title}`;

  const description = document.createElement("p");
  description.classList.add("todo-item__description");
  description.innerHTML = `<span class="sr-only">Description:</span> ${todo.description}`;

  const dueDate = document.createElement("p");
  const formattedDate = format(todo.dueDate, "dd/MM/yyyy");
  const distanceToNow = formatDistanceToNow(todo.dueDate);
  const dueDateText = `Due: ${distanceToNow} (${formattedDate})`;

  dueDate.classList.add("todo-item__due-date");
  dueDate.innerHTML = `<span class="sr-only">Due Date:</span> ${dueDateText}`;

  const priority = document.createElement("p");
  priority.classList.add("todo-item__priority");
  priority.innerHTML = `<span class="sr-only">Priority:</span> ${todo.priority}`;

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("todo-item__checkbox-container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("todo-item__complete-checkbox");
  if (todo.complete) {
    checkbox.checked = true;
    addCompleteClass(todoItem);
  }
  checkbox.addEventListener("click", handleToggleComplete.bind(checkbox, todo));

  const label = document.createElement("label");
  label.setAttribute("for", "complete-checkbox");
  label.classList.add("todo-item__complete-label");
  label.textContent = "Complete";

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(dueDate);
  container.appendChild(priority);
  container.appendChild(checkboxContainer);

  todoItem.appendChild(ellipsisContainer);
  todoItem.appendChild(container);

  ellipsisBtn.addEventListener("click", toggleMenu.bind(menuContainer));
  removeBtn.addEventListener("click", removeTodoBtnHandler.bind(todo));
  editBtn.addEventListener("click", editTodoBtnHandler.bind(todo));

  return todoItem;
}

function handleToggleComplete(todo) {
  todo.toggleComplete();
  addCompleteClass(this.closest(".todo-item"));
}

function addCompleteClass(card) {
  card.classList.toggle("completed");
}

function toggleMenu() {
  const menuContainer = this;
  menuContainer.classList.toggle("show-menu");
}

function removeTodoBtnHandler() {
  const todo = this;
  const currentProject = app.getCurrentProject();

  currentProject.removeTodo(todo);
  loadTodos();
}

function editTodoBtnHandler() {
  const todo = this;
  const editFormModal = editTodoHandler(todo);
  document.body.appendChild(editFormModal);
}
