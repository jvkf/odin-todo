import createEditProjectForm, {
  updateProjectTitleInput,
} from "../components/editProjectForm";
import createModal from "../components/modal";

export default function editProjectHandler() {
  const editBtn = document.querySelector("#editProjectBtn");
  const modal = createModal();
  const editForm = createEditProjectForm();
  const formContainer = modal.querySelector(".modal-content_form-container");

  formContainer.appendChild(editForm);

  editBtn.addEventListener("click", () => {
    updateProjectTitleInput(formContainer);

    document.body.appendChild(modal);
  });
}
