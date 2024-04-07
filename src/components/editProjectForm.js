import { projectChangedEvent } from "../helper/eventBus";
import { closeModal } from "./modal";

function editProjectFormProto() {
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

  return form;
}

export default function createEditProjectForm(getCurrentProjectFn) {
  const editFormInst = editProjectFormProto();
  editFormInst.addEventListener("submit", (e) => {
    const projectTitleInput = document.querySelector("#edit-project-title");
    const newProjectTitle = projectTitleInput.value;

    e.preventDefault();
    getCurrentProjectFn().updateTitle(newProjectTitle);
    document.dispatchEvent(projectChangedEvent);
    closeModal();
  });

  return editFormInst;
}
