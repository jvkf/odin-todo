export default function addActiveClass(currentProject) {
  const currentProjectTitle = currentProject.title;
  const btns = document.querySelectorAll(".projects-sidebar_card");

  for (let i = 0; i < btns.length; i += 1) {
    if (btns[i].querySelector("h3").textContent === currentProjectTitle) {
      btns[i].classList.add("active");
    } else {
      btns[i].classList.remove("active");
    }
  }
}
