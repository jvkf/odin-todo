import { app } from "..";
import loadProjects from "./loadProjects";

export default function removeProjectHandler() {
  const removeBtn = document.querySelector("#removeProjectBtn");

  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    app.removeProject();
    loadProjects();
  });
}
