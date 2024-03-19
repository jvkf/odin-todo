import createModal, { closeModal } from "../components/modal";
import clearContainer from "../helper/clearContainer";
import { app } from "../index";
import loadProjects from "./loadProjects";

export default function editProjectHandler() {
  const editBtn = document.querySelector("#editProjectBtn");
  const modal = createModal();

  editBtn.addEventListener("click", () => {
    const formContainer = modal.querySelector(".modal-content_form-container");
    clearContainer(formContainer);

    const newForm = createEditProjectForm();
    formContainer.appendChild(newForm);

    document.body.appendChild(modal);
  });
}

export function createEditProjectForm(projectTitle) {
  const form = document.createElement("form");
  form.setAttribute("id", "edit-project-form");

  const label = document.createElement("label");
  label.setAttribute("for", "edit-project-title");
  label.textContent = "Edit Project Title:";

  const currentProject = app.getCurrentProject();

  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("type", "text");
  projectTitleInput.setAttribute("id", "edit-project-title");
  projectTitleInput.setAttribute("name", "edit-project-title");
  projectTitleInput.setAttribute("placeholder", "e.g. New Title");
  projectTitleInput.setAttribute("required", "");
  projectTitleInput.value = currentProject.title;

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Update";

  form.appendChild(label);
  form.appendChild(projectTitleInput);
  form.appendChild(button);

  form.addEventListener("submit", handleEditFormSubmission);

  return form;
}

function handleEditFormSubmission(event) {
  event.preventDefault();
  const projectTitleInput = document.querySelector("#edit-project-title");
  const newProjectTitle = projectTitleInput.value;

  app.getCurrentProject().updateTitle(newProjectTitle);
  loadProjects();
  closeModal();
}
