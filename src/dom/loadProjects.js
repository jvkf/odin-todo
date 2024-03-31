import projectCard, { addActiveClass } from "../components/project-card";
import clearContainer from "../helper/clearContainer";
import { app } from "../index";

const projectsContainer = document.querySelector(".projects-sidebar_container");

export default function loadProjects() {
  const projects = app.getProjects();
  const areThereProjectsInDOM = projectsContainer.children.length > 0;

  if (areThereProjectsInDOM) {
    clearContainer(projectsContainer);
  }

  projects.forEach((project) => {
    const card = projectCard(project.title);

    projectsContainer.appendChild(card);
  });
  addActiveClass();
}
