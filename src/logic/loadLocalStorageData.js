import ToDoItem from "./item-class";
import TodoProject from "./project-class";

export default function loadLocalStorage({ clearProjects, addProject }) {
  const unparsedProjects = localStorage.getItem("projects");
  const parsedProjects = JSON.parse(unparsedProjects);

  if (!unparsedProjects) return;

  clearProjects();

  for (let i = 0; i < parsedProjects.length; i += 1) {
    const { title, todos } = parsedProjects[i];
    const project = new TodoProject(title);
    const areThereTodos = Boolean(todos);

    if (areThereTodos) {
      for (let j = 0; j < todos.length; j += 1) {
        const todo = new ToDoItem(todos[j]);
        project.addTodo(todo);
      }
    }

    addProject(project);
  }
}
