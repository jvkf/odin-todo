import addActiveClass from "../dom/addActiveClass";
import createProjectHandler from "../dom/createProject";
import createTodoHandler from "../dom/createTodo";
import editProjectHandler from "../dom/editProject";
import loadProjects from "../dom/loadProjects";
import loadTodos from "../dom/loadTodos";
import removeProjectHandler from "../dom/removeProject";
import createAppLocalStorage from "./createAppDataLocalStorage";
import loadLocalStorage from "./loadLocalStorageData";
import TodoProject from "./project-class";

const projects = [];
let selectedProject = null;

const app = {
  getProjects() {
    return [...projects];
  },
  getCurrentProject() {
    return selectedProject;
  },
  clearProjects() {
    projects.splice(0, projects.length);
  },
  setProject(title) {
    selectedProject = projects.find((project) => project.title === title);
    addActiveClass(selectedProject);
  },
  addProject(project) {
    projects.push(project);
  },
  findSelectedProjectIndex() {
    const selectedProjectTitle = selectedProject.title;

    return projects.findIndex(
      (project) => project.title === selectedProjectTitle
    );
  },
  removeProject() {
    projects.splice(this.findSelectedProjectIndex(), 1);
    if (projects.length === 0) {
      projects.push(new TodoProject("Home"));
    }
    this.setProject(projects[projects.length - 1].title);
  },
  init() {
    loadLocalStorage(this);
    [selectedProject] = projects;
    loadProjects(this);
    createProjectHandler(this);
    editProjectHandler(this);
    removeProjectHandler({ removeProject: this.removeProject.bind(this) });
    createTodoHandler(this);
  },
  createListeners() {
    document.addEventListener("todoChanged", () => {
      loadTodos(selectedProject);
      createAppLocalStorage(this);
    });
    document.addEventListener("projectChanged", () => {
      loadProjects(this);
      loadTodos(selectedProject);
      createAppLocalStorage(this);
    });
    document.addEventListener("projectToggle", () => {
      loadTodos(selectedProject);
    });
  },
};

export default app;
