import { app } from "..";
import loadTodos from "../dom/loadTodos";

export default function projectCard(title) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("projects-sidebar_card");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  button.appendChild(h3);

  function cardClickHandler() {
    app.setProject(title);
    addActiveClass();
    loadTodos();
  }

  button.addEventListener("click", cardClickHandler);

  return button;
}

export function addActiveClass() {
  const currentProjectTitle = app.getCurrentProject().title;
  const btns = document.querySelectorAll(".projects-sidebar_card");

  for (let i = 0; i < btns.length; i++) {
    if (btns[i].querySelector("h3").textContent === currentProjectTitle) {
      btns[i].classList.add("active");
    } else {
      btns[i].classList.remove("active");
    }
  }
}
