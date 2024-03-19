import { app } from "..";

export default function projectCard(title) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("projects-sidebar_card");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  button.appendChild(h3);

  function cardClickHandler() {
    app.setProject(title);
  }

  button.addEventListener("click", cardClickHandler);

  return button;
}
