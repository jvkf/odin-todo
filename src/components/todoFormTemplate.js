export default function todoFormTemplate() {
  const form = document.createElement("form");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "todo-title");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "todo-title");
  titleInput.setAttribute("name", "todo-title");
  titleInput.setAttribute("placeholder", "Enter title");
  titleInput.setAttribute("required", "");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "todo-description");
  descriptionLabel.textContent = "Description:";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "todo-description");
  descriptionInput.setAttribute("name", "todo-description");
  descriptionInput.setAttribute("placeholder", "Enter description");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "todo-due-date");
  dueDateLabel.textContent = "Due Date:";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "datetime-local");
  dueDateInput.setAttribute("id", "todo-due-date");
  dueDateInput.setAttribute("name", "todo-due-date");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "todo-priority");
  priorityLabel.textContent = "Priority:";
  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "todo-priority");
  priorityInput.setAttribute("name", "todo-priority");
  const priorityOptions = ["Low", "Medium", "High"];
  priorityOptions.forEach((optionText) => {
    const option = document.createElement("option");
    option.setAttribute("value", optionText);
    option.textContent = optionText;
    priorityInput.appendChild(option);
  });

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Create";

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(button);

  return form;
}

export function handleFormData() {
  const title = document.querySelector("#todo-title").value;
  const description = document.querySelector("#todo-description").value;
  const dueDateValue = document.querySelector("#todo-due-date").value;
  const priority = document.querySelector("#todo-priority").value;
  const dueDate = new Date(dueDateValue);

  const todoItem = {
    title,
    description,
    dueDate,
    priority,
  };

  return todoItem;
}
