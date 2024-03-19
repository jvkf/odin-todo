import TodoProject from "./project-class";

export default class App {
  constructor() {
    const projects = [];
    let selectedProject;

    this.init = () => {
      projects.push(new TodoProject("Home", 0));
      selectedProject = projects[0];
    };

    this.addProject = (title) => {
      projects.push(new TodoProject(title));
    };

    this.setProject = (title) => {
      selectedProject = projects.find((project) => project.title === title);
    };

    this.removeProject = () => {
      function findProjectIndex() {
        let selectedProjectTitle = selectedProject.title;

        return projects.findIndex(
          (project) => project.title === selectedProjectTitle
        );
      }

      projects.splice(findProjectIndex(), 1);

      if (projects.length === 0) {
        projects.push(new TodoProject("Home"));
      }

      selectedProject = projects[projects.length - 1];
    };

    this.getProjects = () => {
      return [...projects];
    };

    this.getCurrentProject = () => {
      return selectedProject;
    };
  }
}
