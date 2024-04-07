import createEditProjectForm from "../components/editProjectForm";
import createModal from "../components/modal";

function updateProjectTitleInputOnForm({ getCurrentProject, formContainer }) {
  const input = formContainer.querySelector("#edit-project-title");
  const currentProject = getCurrentProject();

  input.value = currentProject.title;
}

export default function editProjectHandler({ getCurrentProject }) {
  const editBtn = document.querySelector("#editProjectBtn");
  const modal = createModal();
  const editForm = createEditProjectForm(getCurrentProject);
  const formContainer = modal.querySelector(".modal-content_form-container");

  formContainer.appendChild(editForm);

  editBtn.addEventListener("click", () => {
    updateProjectTitleInputOnForm({ getCurrentProject, formContainer });
    document.body.appendChild(modal);
  });
}
