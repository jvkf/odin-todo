import createProjectHandler from "./dom/createProject";
import createTodoHandler from "./dom/createTodo";
import editProjectHandler from "./dom/editProject";
import removeProjectHandler from "./dom/removeProject";
import App from "./logic/app";
import "./styles.css";

export const app = new App();

app.init();
createProjectHandler();
editProjectHandler();
removeProjectHandler();
createTodoHandler();
