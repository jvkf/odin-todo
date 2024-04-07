export default function createAppLocalStorage({ getProjects }) {
  const projects = getProjects();
  localStorage.setItem("projects", JSON.stringify(projects));
}
