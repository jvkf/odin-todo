import createModal, { closeModal } from "../components/modal";
import todoFormProto, { handleTodoFormData } from "../components/todoFormProto";
import { todoChangedEvent } from "../helper/eventBus";

export default function editTodoHandler(todoRef) {
  const modal = createModal();
  const editTodoForm = todoFormProto("Edit", todoRef);
  editTodoForm.setAttribute("id", "edit-todo-form");
  editTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoFormObj = handleTodoFormData();
    todoRef.update(todoFormObj);
    document.dispatchEvent(todoChangedEvent);
    closeModal();
  });

  modal
    .querySelector(".modal-content_form-container")
    .appendChild(editTodoForm);

  return modal;
}
