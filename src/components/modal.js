export function closeModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
}

function closeModalOnOutsideClick(event) {
  if (event.target === this) {
    closeModal();
  }
}

export default function createModal() {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalFormContainer = document.createElement("div");
  modalFormContainer.className = "modal-content_form-container";

  const closeBtn = document.createElement("button");
  closeBtn.className = "modal-close-btn";
  closeBtn.innerHTML =
    '<i class="fa-solid fa-x"></i><span class="sr-only">Close Modal</span>';
  closeBtn.addEventListener("click", closeModal);

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalFormContainer);
  modal.appendChild(modalContent);
  window.addEventListener("click", closeModalOnOutsideClick.bind(modal));

  return modal;
}
