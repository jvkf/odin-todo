import createProjectForm from "../components/createProjectForm";
import createModal from "../components/modal";

export default function createProjectHandler() {
  const btn = document.querySelector("#createProjectBtn");
  const modal = createModal();
  const projectForm = createProjectForm();

  modal.querySelector(".modal-content_form-container").appendChild(projectForm);

  btn.addEventListener("click", () => {
    document.body.appendChild(modal);
  });
}
