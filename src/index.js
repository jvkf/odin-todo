import createProjectHandler from "./dom/createProject";
import editProjectHandler from "./dom/editProject";
import loadProjects from "./dom/loadProjects";
import removeProjectHandler from "./dom/removeProject";
import App from "./logic/app";
import "./styles.css";

export const app = new App();

app.init();
loadProjects();
createProjectHandler();
editProjectHandler();
removeProjectHandler();
