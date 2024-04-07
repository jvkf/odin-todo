import { projectToggleEvent } from "../helper/eventBus";

export default function projectCard(title, setProjectFn) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("projects-sidebar_card");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  button.appendChild(h3);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    setProjectFn(title);
    document.dispatchEvent(projectToggleEvent);
  });

  return button;
}
