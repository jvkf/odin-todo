import loadProjects from "../dom/loadProjects";
import { app } from "../index";
import TodoProject from "../logic/project-class";
import { closeModal } from "./modal";

export default function createProjectForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "project-form");

  const label = document.createElement("label");
  label.setAttribute("for", "project-title");
  label.textContent = "Project Title:";

  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("type", "text");
  projectTitleInput.setAttribute("id", "project-title");
  projectTitleInput.setAttribute("name", "project-title");
  projectTitleInput.setAttribute("placeholder", "e.g. Work");
  projectTitleInput.setAttribute("required", "");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Create";

  form.appendChild(label);
  form.appendChild(projectTitleInput);
  form.appendChild(button);

  form.addEventListener("submit", handleFormSubmission);

  return form;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const projectTitleInput = document.querySelector("#project-title");
  const projectTitle = projectTitleInput.value;
  const project = new TodoProject(projectTitle);

  app.addProject(project);
  loadProjects();

  const projectForm = document.querySelector("#project-form");
  projectForm.reset();
  closeModal();
}
