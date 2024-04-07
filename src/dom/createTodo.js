import createModal, { closeModal } from "../components/modal";
import todoFormProto, { handleTodoFormData } from "../components/todoFormProto";
import { todoChangedEvent } from "../helper/eventBus";
import ToDoItem from "../logic/item-class";

export default function createTodoHandler({ getCurrentProject }) {
  const btn = document.querySelector("#createTodoBtn");
  const modal = createModal();
  const modalFormContainer = modal.querySelector(
    ".modal-content_form-container"
  );
  const projectForm = todoFormProto("Create");

  projectForm.setAttribute("id", "create-todo-form");
  projectForm.addEventListener("submit", (e) => {
    const todoFormObj = handleTodoFormData();
    const newTodoItem = new ToDoItem(todoFormObj);
    const project = getCurrentProject();

    e.preventDefault();
    project.addTodo(newTodoItem);
    document.dispatchEvent(todoChangedEvent);
    projectForm.reset();
    closeModal();
  });

  modalFormContainer.appendChild(projectForm);

  btn.addEventListener("click", () => {
    document.body.appendChild(modal);
  });
}
