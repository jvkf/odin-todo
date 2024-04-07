import { projectChangedEvent } from "../helper/eventBus";

export default function removeProjectHandler({ removeProject }) {
  const removeBtn = document.querySelector("#removeProjectBtn");

  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    removeProject();
    document.dispatchEvent(projectChangedEvent);
  });
}
