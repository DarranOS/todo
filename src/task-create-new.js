import todoList from "./task-store";
import NewTodo from "./task-factory";
import createSVG from "./create-svg";
import svgPaths from "./svgPaths";
import refreshUpcomingDays from "./upcoming-days-refresh";
import upComingDays from "./upcoming-days";

const createNewTask = (dateId) => {
  hideAddButtons();

  console.log("Trigger 2");
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
    forwardTodo(newToDoContainer, dateId);
  });
  cancelButton.addEventListener("click", () =>
    cancelTodo(newToDoContainer, dateId.slice(0, 4))
  );

  newToDoContainer.appendChild(todoForm);
  newToDoContainer.appendChild(toDoContainerButtonsDiv);

  return newToDoContainer;
};

const forwardTodo = (container, number) => {
  console.log("Forwarding!");
  console.log(number);

  let todoEntry = {
    title: document.getElementById("todo-title").value || "Test",
    desc: document.getElementById("todo-desc").value || "Test",
    dueDate: number.slice(5),
    // priority: "3",
    // project: "My Project",
    // label: "My Label",
  };

  const passedTodo = new NewTodo({ todoEntry });

  console.dir(passedTodo);
  todoList.push(passedTodo);
  console.dir(todoList);

  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }

  refreshUpcomingDays(Number(number.slice(0, 4)));
};

const cancelTodo = (container, number) => {
  console.log(`Refreshing 1!`);
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }

  refreshUpcomingDays(Number(number));
};

const unhideAddButtons = () => {
  const addDivs = document.querySelectorAll(".add-task-div");
  console.log("Unhiding");
  console.dir(addDivs);
  addDivs.forEach((div) => (div.style.display = "flex"));
};

const hideAddButtons = () => {
  const addDivs = document.querySelectorAll(".add-task-div");
  console.log("Hiding");
  console.dir(addDivs);
  addDivs.forEach((div) => (div.style.display = "none"));
};

export default createNewTask;
