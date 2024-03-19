import createModal, { closeModal } from "../components/modal";
import { app } from "../index";
import loadProjects from "./loadProjects";

export default function createProjectHandler() {
  const btn = document.querySelector("#createProjectBtn");
  const modal = createModal();
  const projectForm = createProjectForm();

  modal.querySelector(".modal-content_form-container").appendChild(projectForm);

  btn.addEventListener("click", () => {
    document.body.appendChild(modal);
  });
}

function createProjectForm() {
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

  app.addProject(projectTitle);
  loadProjects();

  const projectForm = document.querySelector("#project-form");
  projectForm.reset();
  closeModal();
}
