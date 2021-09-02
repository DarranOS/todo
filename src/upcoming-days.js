import { format, add, compareAsc } from "date-fns";
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";
import todoList from "./task-store";

const upcomingDaysDiv = document.createElement("div");

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
  upcomingDaysDiv.setAttribute("id", "upcoming-days");
  upcomingDaysDiv.classList.add("upcoming-days");

  const deadlines = todoList.map((n) => {
    return {
      title: n.title,
      priority: n.priority,
    };
  });

  deadlines.map((n) => createDailyEntry(n));
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

// TODO Create scrolling slots
const createDailySlots = () => {
  const todaySlotsDiv = document.createElement("div");
  todaySlotsDiv.classList.add("upcoming-daily-planner");
  const todaySlotTitle = document.createElement("p");
  todaySlotTitle.classList.add("upcoming-daily-title");
  todaySlotTitle.textContent = format(new Date(), "MMM d") + " • Today";
  dateModifier.days += 1;
  todaySlotsDiv.appendChild(todaySlotTitle);
  upcomingDaysDiv.appendChild(todaySlotsDiv);

  const tomorrowSlotsDiv = document.createElement("div");
  tomorrowSlotsDiv.classList.add("upcoming-daily-planner");
  const tomorrowSlotTitle = document.createElement("p");
  tomorrowSlotTitle.classList.add("upcoming-daily-title");
  tomorrowSlotTitle.textContent =
    format(add(new Date(), dateModifier), "MMM d") + " • Tomorrow";
  dateModifier.days += 1;
  tomorrowSlotsDiv.appendChild(tomorrowSlotTitle);
  upcomingDaysDiv.appendChild(tomorrowSlotsDiv);

  while (dateModifier.days < 7) {
    const dailySlotsDiv = document.createElement("div");
    dailySlotsDiv.classList.add("upcoming-daily-planner");
    const dailySlotTitle = document.createElement("p");
    dailySlotTitle.classList.add("upcoming-daily-title");
    console.log(dateModifier.days);
    dailySlotTitle.textContent =
      format(add(new Date(), dateModifier), "MMM d") +
      " • " +
      format(add(new Date(), dateModifier), "eeee");
    dateModifier.days += 1;
    dailySlotsDiv.appendChild(dailySlotTitle);
    upcomingDaysDiv.appendChild(dailySlotsDiv);
  }
};

// TODO Create scrolling slots
const scrollDailySlots = () => {
  console.log("Test scroll");
  const dailyPlannerDiv = document.createElement("div");
  dailyPlannerDiv.classList.add("upcoming-daily-planner");
  const dailyTaskTitle = document.createElement("p");
  dailyTaskTitle.classList.add("upcoming-daily-title");
  dailyTaskTitle.textContent = "Hello";
  dailyPlannerDiv.appendChild(dailyTaskTitle);
  upcomingDaysDiv.appendChild(dailyPlannerDiv);
  //     //   return dailyPlannerDiv;
};

export default upcomingDays;
