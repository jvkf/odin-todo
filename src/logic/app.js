import loadProjects from "../dom/loadProjects";
import loadTodos from "../dom/loadTodos";
import { createAppData, loadAppData } from "./localStorage";
import TodoProject from "./project-class";

export default class App {
  constructor() {
    const projects = [];
    let selectedProject;

    this.createDefaultProject = () => {
      if (projects.length === 0) {
        projects.push(new TodoProject("Home"));
        createAppData();
      }
    };

    this.init = () => {
      loadAppData();
      selectedProject = projects[0];
      loadProjects();
      loadTodos();
    };

    this.addProject = (project, isAddingFromDOM = true) => {
      projects.push(project);
      if (isAddingFromDOM) {
        createAppData();
      }
    };

    this.setProject = (title) => {
      selectedProject = projects.find((project) => project.title === title);
    };

    this.findSelectedProjectIndex = () => {
      let selectedProjectTitle = selectedProject.title;

      return projects.findIndex(
        (project) => project.title === selectedProjectTitle
      );
    };

    this.removeProject = () => {
      projects.splice(this.findSelectedProjectIndex(), 1);

      this.createDefaultProject();
      createAppData();
      selectedProject = projects[projects.length - 1];
    };

    this.clearProjects = () => {
      projects.splice(0, -1);
    };

    this.getProjects = () => {
      return [...projects];
    };

    this.getCurrentProject = () => {
      return selectedProject;
    };
  }
}
