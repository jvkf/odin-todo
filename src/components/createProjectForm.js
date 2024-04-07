import { projectChangedEvent } from "../helper/eventBus";
import TodoProject from "../logic/project-class";
import { closeModal } from "./modal";

function addProjectFormProto() {
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

  return form;
}

export default function createProjectForm(addProjectFn) {
  const projectFormInst = addProjectFormProto();

  projectFormInst.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectTitleInput = document.querySelector("#project-title");
    const projectTitle = projectTitleInput.value;
    const project = new TodoProject(projectTitle);

    addProjectFn(project);
    document.dispatchEvent(projectChangedEvent);
    projectFormInst.reset();
    closeModal();
  });

  return projectFormInst;
}
