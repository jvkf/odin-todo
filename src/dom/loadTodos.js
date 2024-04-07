import todoCardProto from "../components/todo-card";
import clearContainer from "../helper/clearContainer";

const todosContainer = document.querySelector(".dashboard_todos");

export default function loadTodos(currentProject) {
  const todos = currentProject.getTodos();
  const areThereTodosInDOM = todosContainer.children.length > 0;

  if (areThereTodosInDOM) {
    clearContainer(todosContainer);
  }

  todos.forEach((todo) => {
    const card = todoCardProto(todo, currentProject);

    todosContainer.appendChild(card);
  });
}
