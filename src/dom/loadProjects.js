import projectCard from "../components/project-card";
import clearContainer from "../helper/clearContainer";

const projectsContainer = document.querySelector(".projects-sidebar_container");

export default function loadProjects({ getProjects, setProject }) {
  const projects = getProjects();
  const areThereProjectsInDOM = projectsContainer.children.length > 0;

  if (areThereProjectsInDOM) {
    clearContainer(projectsContainer);
  }

  projects.forEach((project) => {
    const card = projectCard(project.title, setProject);

    projectsContainer.appendChild(card);
  });
}
