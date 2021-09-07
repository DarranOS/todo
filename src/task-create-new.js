import todoList from "./task-factory";
import newTodo from "./task-factory";
import createSVG from "./create-svg";
import svgPaths from "./svgPaths";
import refreshUpcomingDays from "./upcoming-days-refresh";

const createNewTask = (date) => {
  console.log(`Create new task for ${date}.`);

  const newToDoContainer = document.createElement("div");
  newToDoContainer.classList.add("new-todo-container");
  newToDoContainer.setAttribute("id", "currentNewTodo");

  const todoForm = document.createElement("div");
  todoForm.classList.add("new-todo-div");

  const todoFormTop = document.createElement("div");
  todoFormTop.classList.add("new-todo-div-top");

  const todoFormBottom = document.createElement("div");
  todoFormBottom.classList.add("new-todo-div-bottom");

  const todoFormBottomLeft = document.createElement("div");
  todoFormBottomLeft.classList.add("new-todo-div-bottom-left");
  const todoFormBottomRight = document.createElement("div");
  todoFormBottomRight.classList.add("new-todo-div-bottom-right");

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("id", "todo-title");
  todoTitle.setAttribute("type", "text");
  todoTitle.setAttribute("placeholder", "e.g. Get pastries at Sun 9 #family");
  const todoDesc = document.createElement("input");
  todoDesc.setAttribute("id", "todo-desc");
  todoDesc.setAttribute("type", "text");
  todoDesc.setAttribute("placeholder", "Description");

  const projectsButton = document.createElement("button");
  projectsButton.setAttribute("id", "todo-projects");
  projectsButton.appendChild(createSVG(16, 16, svgPaths.schedule()));
  const projectsButtonText = document.createElement("p");
  projectsButtonText.textContent = "Projects";
  projectsButton.appendChild(projectsButtonText);

  const dateButton = document.createElement("button");
  dateButton.setAttribute("id", "todo-date");
  dateButton.appendChild(createSVG(16, 16, svgPaths.inbox()));
  const dateButtonText = document.createElement("p");
  dateButtonText.textContent = "Inbox";
  dateButton.appendChild(dateButtonText);

  const todoSchedule = createSVG(16, 16, svgPaths.schedule());
  const todoFlag = createSVG(16, 16, svgPaths.flag());
  const todoLabel = createSVG(16, 16, svgPaths.alarm());

  todoFormTop.appendChild(todoTitle);
  todoFormTop.appendChild(todoDesc);

  todoFormBottomLeft.appendChild(projectsButton);
  todoFormBottomLeft.appendChild(dateButton);

  todoFormBottomRight.appendChild(todoSchedule);
  todoFormBottomRight.appendChild(todoFlag);
  todoFormBottomRight.appendChild(todoLabel);

  todoFormBottom.appendChild(todoFormBottomLeft);
  todoFormBottom.appendChild(todoFormBottomRight);

  todoForm.appendChild(todoFormTop);
  todoForm.appendChild(todoFormBottom);

  //-----------------Save & Cancel Buttons---------------------------//

  const toDoContainerButtonsDiv = document.createElement("div");
  toDoContainerButtonsDiv.classList.add("todo-buttons-div");

  const saveButton = document.createElement("button");
  saveButton.textContent = "Add Task";
  saveButton.classList.add("add-task-button");
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("cancel-task-button");

  toDoContainerButtonsDiv.appendChild(saveButton);
  toDoContainerButtonsDiv.appendChild(cancelButton);

  //-----------------Save & Cancel Button Event Listeners---------------------------//

  saveButton.addEventListener("click", () => {
    forwardTodo();
  });
  cancelButton.addEventListener("click", () => cancelTodo(newToDoContainer));

  newToDoContainer.appendChild(todoForm);
  newToDoContainer.appendChild(toDoContainerButtonsDiv);

  return newToDoContainer;
};

const forwardTodo = () => {
  console.log("Forwarding!");
  // let todoEntry = {

  //   title: document.getElementById("todo-title").value || "Test",
  //   desc: document.getElementById("todo-desc").value || "Test",
  //   dueDate: document.getElementById("pages").value || "Test",
  //   priority: document.getElementById("status").value || "Not Read",
  //   project: timestamp,
  //   label: timestamp,
  //  };

  // let entry = new NewTodo ({ todoEntry });

  // Pass Object through to the store.

  // Render Day View.
};

const cancelTodo = (container) => {
  console.log(`Refreshing 1!`);
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }
  refreshUpcomingDays();
};

const toggleAddButtons = () => {
  const addDivs = document.querySelectorAll(".add-task-div");
  console.log(addDivs);
  addDivs.forEach((div) => div.classList.toggle("add-task-div-hidden"));
};

export default createNewTask;
