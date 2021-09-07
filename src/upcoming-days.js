import { format, add, compareAsc } from "date-fns";
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";
import todoList from "./task-store";
import createNewTask from "./task-create-new";

const upcomingDaysDiv = document.createElement("div");
const todaysDate = new Date();
const dateFormater = "dd/MM/yyyy";

const dateModifier = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const upcomingDays = () => {
  upcomingDaysDiv.setAttribute("id", "upcoming-wrapper");
  upcomingDaysDiv.classList.add("upcoming-wrapper");

  dateModifier.days = 0;

  upcomingDaysDiv.appendChild(createTodaySlot());
  upcomingDaysDiv.appendChild(createTomorrowSlot());
  while (dateModifier.days < 7) {
    upcomingDaysDiv.appendChild(createDailySlots());
  }

  window.addEventListener("scroll", scrollDailySlots);

  return upcomingDaysDiv;
};

const createTodaySlot = () => {
  const todaySlotsDiv = createEmptySlot("Today", todaysDate);
  return todaySlotsDiv;
};

const createTomorrowSlot = () => {
  const tomorrowSlotsDiv = createEmptySlot("Tomorrow", add(todaysDate, dateModifier));
  return tomorrowSlotsDiv;
};

const createDailySlots = () => {
  const dailySlotsDiv = createEmptySlot(todaysDate, add(todaysDate, dateModifier));
  return dailySlotsDiv;
};

const createEmptySlot = (title, date) => {
  const formattedDailyDate = format(date, dateFormater);
  const upcomingDateSlot = document.createElement("div");
  upcomingDateSlot.classList.add("upcoming-date-slot");
  upcomingDateSlot.setAttribute("id", "div_" + formattedDailyDate);

  upcomingDateSlot.appendChild(createUpcomingDateDiv(title, date));

  const upcomingDateTaskDiv = document.createElement("div");
  upcomingDateTaskDiv.classList.add("upcoming-task-div");

  const dayDeadlines = checkDeadlines(formattedDailyDate);
  if (dayDeadlines.length > 0) {
    upcomingDateTaskDiv.appendChild(createDueTask(dayDeadlines[0]));
  }

  upcomingDateTaskDiv.appendChild(createAddTask(date));
  dateModifier.days += 1;

  upcomingDateSlot.appendChild(upcomingDateTaskDiv);

  return upcomingDateSlot;
};

// Infinite Scrolling

const scrollDailySlots = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const dailySlotsDiv = createEmptySlot(todaysDate, add(todaysDate, dateModifier));
  upcomingDaysDiv.appendChild(dailySlotsDiv);
};

// Compresses Tasks into one simpler/quicker object
const checkDeadlines = (formatedDate) => {
  const daysDeadlines = todoList.filter((task) => task.dueDate === formatedDate);
  return daysDeadlines;
};

const createUpcomingDateDiv = (title, date) => {
  const upcomingDateDiv = document.createElement("div");
  upcomingDateDiv.classList.add("upcoming-date-div");

  const upcomingDateTitle = document.createElement("p");
  upcomingDateTitle.classList.add("upcoming-daily-title");
  if (typeof title === "string") {
    upcomingDateTitle.textContent = format(date, "MMM d") + " • " + title;
  } else {
    upcomingDateTitle.textContent = format(date, "MMM d") + " • " + format(date, "eee");
  }

  upcomingDateDiv.appendChild(upcomingDateTitle);

  return upcomingDateDiv;
};

const createAddTask = (date) => {
  const currentDate = format(date, dateFormater);
  const addTaskDiv = document.createElement("div");
  addTaskDiv.classList.add("add-task-div");
  // addTaskDiv.classList.add("add-task-div-hidden");

  addTaskDiv.setAttribute("id", "add_" + currentDate);

  const addNewTaskButton = createSVG(16, 16, svgPaths.plus());
  addNewTaskButton.classList.add("add-new-task-button");
  addNewTaskButton.setAttribute("id", "adb_" + currentDate);
  const addNewTaskText = document.createElement("p");
  addNewTaskText.classList.add("add-new-task-text");
  addNewTaskText.textContent = "Add task";
  addNewTaskText.setAttribute("id", "adt_" + currentDate);
  addTaskDiv.appendChild(addNewTaskButton);
  addTaskDiv.appendChild(addNewTaskText);

  addTaskDiv.addEventListener("click", (e) => insertNewTaskDiv(e));
  return addTaskDiv;
};

const insertNewTaskDiv = (e) => {
  e.stopPropagation();

  const grandParent = e.target.closest(".upcoming-date-slot");
  console.log(grandParent);
  const currentSibling = e.target.closest(".upcoming-task-div");
  console.log(currentSibling);
  grandParent.insertBefore(createNewTask(grandParent.id.slice(4)), currentSibling);
};

// Gets called in the check deadline fucntion returned a valid array

const createDueTask = (deadline) => {
  const dueTaskDiv = document.createElement("div");
  dueTaskDiv.classList.add("due-task-div");

  const dueTaskLeftDiv = document.createElement("div");
  dueTaskLeftDiv.classList.add("due-task-left-div");

  const dueTaskLeftTopDiv = document.createElement("div");
  dueTaskLeftTopDiv.classList.add("due-task-left-top-div");

  const dueTaskLeftIconDiv = document.createElement("div");
  dueTaskLeftIconDiv.classList.add("due-task-left-icon-div");

  const dueTaskLeftTopTextDiv = document.createElement("div");
  dueTaskLeftTopTextDiv.classList.add("due-task-left-text-div");

  const dueTaskLeftTopDivText = document.createElement("p");
  dueTaskLeftTopDivText.textContent = deadline.title;
  dueTaskLeftTopTextDiv.appendChild(dueTaskLeftTopDivText);

  const dueTaskLeftIcon = createSVG(16, 16, svgPaths.arrow());
  dueTaskLeftIcon.classList.add("due-task-left-icon");
  dueTaskLeftIconDiv.appendChild(dueTaskLeftIcon);

  dueTaskLeftTopDiv.appendChild(dueTaskLeftIconDiv);
  dueTaskLeftTopDiv.appendChild(dueTaskLeftTopTextDiv);

  const dueTaskLeftMiddleDiv = document.createElement("div");
  dueTaskLeftMiddleDiv.classList.add("due-task-left-middle-div");
  const dueTaskLeftMiddleDivText = document.createElement("p");
  //TODO - Make text content dynamic?
  dueTaskLeftMiddleDivText.textContent = deadline.desc;
  dueTaskLeftMiddleDiv.appendChild(dueTaskLeftMiddleDivText);

  const dueTaskLeftBottomDiv = document.createElement("div");
  dueTaskLeftBottomDiv.classList.add("due-task-left-bottom-div");
  const dueTaskLeftBottomDivText = document.createElement("p");
  //TODO - Make text content dynamic?
  dueTaskLeftBottomDivText.textContent = deadline.label;
  dueTaskLeftBottomDiv.appendChild(dueTaskLeftBottomDivText);

  const dueTaskRightDiv = document.createElement("div");
  dueTaskRightDiv.classList.add("due-task-right-div");

  const dueTaskRightTopDiv = document.createElement("div");
  dueTaskRightTopDiv.classList.add("due-task-right-top-div");
  dueTaskRightTopDiv.appendChild(createSVG(16, 16, svgPaths.schedule()));
  dueTaskRightTopDiv.appendChild(createSVG(16, 16, svgPaths.flag()));
  dueTaskRightTopDiv.appendChild(createSVG(16, 16, svgPaths.comment()));

  const dueTaskRightBottomDiv = document.createElement("div");
  dueTaskRightBottomDiv.classList.add("due-task-right-bottom-div");
  const dueTaskRightBottomDivText = document.createElement("p");
  //TODO - Make text content dynamic?
  dueTaskRightBottomDivText.textContent = deadline.project;
  dueTaskRightBottomDiv.appendChild(dueTaskRightBottomDivText);

  dueTaskLeftDiv.appendChild(dueTaskLeftTopDiv);
  dueTaskLeftDiv.appendChild(dueTaskLeftMiddleDiv);
  dueTaskLeftDiv.appendChild(dueTaskLeftBottomDiv);
  dueTaskRightDiv.appendChild(dueTaskRightTopDiv);
  dueTaskRightDiv.appendChild(dueTaskRightBottomDiv);
  dueTaskDiv.appendChild(dueTaskLeftDiv);
  dueTaskDiv.appendChild(dueTaskRightDiv);

  return dueTaskDiv;
};

// deadlines.map((n) => createDailyEntry(n));

export default upcomingDays;
