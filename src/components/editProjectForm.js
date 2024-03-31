import { app } from "..";
import loadProjects from "../dom/loadProjects";
import { closeModal } from "./modal";

export default function createEditProjectForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "edit-project-form");

  const label = document.createElement("label");
  label.setAttribute("for", "edit-project-title");
  label.textContent = "Edit Project Title:";

  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("type", "text");
  projectTitleInput.setAttribute("id", "edit-project-title");
  projectTitleInput.setAttribute("name", "edit-project-title");
  projectTitleInput.setAttribute("placeholder", "e.g. New Title");
  projectTitleInput.setAttribute("required", "");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Update";

  form.appendChild(label);
  form.appendChild(projectTitleInput);
  form.appendChild(button);

  form.addEventListener("submit", handleEditFormSubmission);

  return form;
}

export function updateProjectTitleInput(formContainer) {
  const input = formContainer.querySelector("#edit-project-title");
  const currentProject = app.getCurrentProject();

  input.value = currentProject.title;
}

function handleEditFormSubmission(event) {
  event.preventDefault();
  const projectTitleInput = document.querySelector("#edit-project-title");
  const newProjectTitle = projectTitleInput.value;

  app.getCurrentProject().updateTitle(newProjectTitle);
  loadProjects();
  closeModal();
}
