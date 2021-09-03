import { format, add, compareAsc } from "date-fns";
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";
import todoList from "./task-store";

const upcomingDaysDiv = document.createElement("div");
const todaysDate = new Date();
const dateFormat = "MMM d";

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

  createTodaySlot();
  createTomorrowSlot();
  createDailySlots();

  window.addEventListener("scroll", scrollDailySlots);

  return upcomingDaysDiv;
};

const createDailyEntry = (n) => {
  const dailyPlannerDiv = document.createElement("div");
  //   dailyPlannerDiv.classList.add("upcoming-daily-planner");
  const dailyTaskTitle = document.createElement("p");
  //   dailyTaskTitle.classList.add("upcoming-daily-title");
  dailyTaskTitle.textContent =
    n.title + " " + format(new Date(), "MMM d") + " • " + format(new Date(), "eeee");
  dailyPlannerDiv.appendChild(dailyTaskTitle);
  upcomingDaysDiv.appendChild(dailyPlannerDiv);
};

const createTodaySlot = () => {
  const todaySlotsDiv = createEmptySlot("Today", todaysDate);
  upcomingDaysDiv.appendChild(todaySlotsDiv);
};

const createTomorrowSlot = () => {
  const tomorrowSlotsDiv = createEmptySlot("Tomorrow", add(todaysDate, dateModifier));
  upcomingDaysDiv.appendChild(tomorrowSlotsDiv);
};

const createDailySlots = () => {
  while (dateModifier.days < 7) {
    console.log(dateModifier.days);
    const dailySlotsDiv = createEmptySlot(todaysDate, add(todaysDate, dateModifier));
    upcomingDaysDiv.appendChild(dailySlotsDiv);
  }
};

const createEmptySlot = (title, date) => {
  const upcomingDateSlot = document.createElement("div");
  upcomingDateSlot.classList.add("upcoming-date-slot");
  upcomingDateSlot.setAttribute("id", "div_" + format(date, "P"));

  const upcomingDateDiv = document.createElement("div");
  upcomingDateDiv.classList.add("upcoming-date-div");

  const upcomingDateTitle = document.createElement("p");
  upcomingDateTitle.classList.add("upcoming-daily-title");
  if (typeof title === "string") {
    upcomingDateTitle.textContent = format(date, "MMM d") + " • " + title;
  } else {
    upcomingDateTitle.textContent = format(date, "MMM d") + " • " + format(date, "eee");
  }
  // TODO some basic logic that checks the div id against an array of events. If true, populate the div with contents.
  dateModifier.days += 1;
  upcomingDateDiv.appendChild(upcomingDateTitle);

  const upcomingDateTaskDiv = document.createElement("div");
  upcomingDateTaskDiv.classList.add("upcoming-task-div");

  const addNewTaskButton = createSVG(16, 16, svgPaths.plus());
  addNewTaskButton.classList.add("add-new-task-button");
  const addNewTaskText = document.createElement("p");
  addNewTaskText.classList.add("add-new-task-text");
  addNewTaskText.textContent = "Add task";
  upcomingDateTaskDiv.appendChild(addNewTaskButton);
  upcomingDateTaskDiv.appendChild(addNewTaskText);

  upcomingDateSlot.appendChild(upcomingDateDiv);
  upcomingDateSlot.appendChild(upcomingDateTaskDiv);

  return upcomingDateSlot;
};

// TODO Create scrolling slots
const scrollDailySlots = () => {
  console.log("Test scroll");
  console.log(window.scrollY);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrollable);
  console.log(dateModifier.days);
  const dailySlotsDiv = createEmptySlot(todaysDate, add(todaysDate, dateModifier));
  upcomingDaysDiv.appendChild(dailySlotsDiv);
};

const deadlines = todoList.map((n) => {
  return {
    dueDate: n.dueDate,
    title: n.title,
    priority: n.priority,
  };
});

// deadlines.map((n) => createDailyEntry(n));

export default upcomingDays;
