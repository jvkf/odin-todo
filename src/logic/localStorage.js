import { app } from "..";
import ToDoItem from "./item-class";
import TodoProject from "./project-class";

export function createAppData() {
  const projects = app.getProjects();
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadAppData() {
  const unparsedProjects = localStorage.getItem("projects");

  if (!unparsedProjects) {
    app.createDefaultProject();
    return;
  }

  const parsedProjects = JSON.parse(unparsedProjects);
  const isAddingFromDOM = false;

  app.clearProjects();

  for (let i = 0; i < parsedProjects.length; i++) {
    const { title, todos } = parsedProjects[i];

    const project = new TodoProject(title);

    const areThereTodos = Boolean(todos);

    if (areThereTodos) {
      for (let j = 0; j < todos.length; j++) {
        const todo = new ToDoItem(todos[j]);
        project.addTodo(todo, isAddingFromDOM);
      }
    }

    app.addProject(project, isAddingFromDOM);
  }
}
