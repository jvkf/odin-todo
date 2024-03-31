import { format } from "date-fns";
import createModal, { closeModal } from "../components/modal";
import todoFormTemplate, {
  handleFormData,
} from "../components/todoFormTemplate";
import loadTodos from "./loadTodos";

export default function editTodoHandler(todoRef) {
  const modal = createModal();
  const editTodoForm = todoFormTemplate();
  editTodoForm.setAttribute("id", "edit-todo-form");
  editTodoForm.addEventListener("submit", handleEditTodo.bind(null, todoRef));
  updateInputs(editTodoForm, todoRef);

  modal
    .querySelector(".modal-content_form-container")
    .appendChild(editTodoForm);

  return modal;
}

function handleEditTodo(todoRef, event) {
  event.preventDefault();
  const todoFormObj = handleFormData();

  todoRef.update(todoFormObj);
  loadTodos();

  closeModal();
}

function updateInputs(editTodoForm, todoRef) {
  editTodoForm.querySelector('button[type="submit"]').textContent = "Edit";
  editTodoForm.querySelector("#todo-title").value = todoRef.title;
  editTodoForm.querySelector("#todo-description").value = todoRef.description;
  editTodoForm.querySelector("#todo-due-date").value = format(
    todoRef.dueDate,
    "yyyy-MM-dd HH:mm"
  );
  editTodoForm.querySelector("#todo-priority").value = todoRef.priority;
}
