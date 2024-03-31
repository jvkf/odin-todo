import { app } from "..";
import createModal, { closeModal } from "../components/modal";
import todoFormTemplate, {
  handleFormData,
} from "../components/todoFormTemplate";
import ToDoItem from "../logic/item-class";
import loadTodos from "./loadTodos";

export default function createTodoHandler() {
  const btn = document.querySelector("#createTodoBtn");
  const modal = createModal();
  const projectForm = todoFormTemplate();
  projectForm.setAttribute("id", "create-todo-form");
  projectForm.addEventListener("submit", handleCreateTodo);

  modal.querySelector(".modal-content_form-container").appendChild(projectForm);

  btn.addEventListener("click", () => {
    document.body.appendChild(modal);
  });
}

function handleCreateTodo(event) {
  event.preventDefault();
  const todoFormObj = handleFormData();

  const currentProject = app.getCurrentProject();
  const newTodoItem = new ToDoItem(todoFormObj);
  currentProject.addTodo(newTodoItem);
  loadTodos();

  const todoForm = document.querySelector("#create-todo-form");
  todoForm.reset();
  closeModal();
}
