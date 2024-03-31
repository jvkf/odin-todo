import todoCard from "../components/todo-card";
import clearContainer from "../helper/clearContainer";
import { app } from "../index";

const todosContainer = document.querySelector(".dashboard_todos");

export default function loadTodos() {
  const todos = app.getCurrentProject().getTodos();
  const areThereTodosInDOM = todosContainer.children.length > 0;

  if (areThereTodosInDOM) {
    clearContainer(todosContainer);
  }

  todos.forEach((todo) => {
    const card = todoCard(todo);

    todosContainer.appendChild(card);
  });
}
