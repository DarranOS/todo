import { format, add, compareAsc } from "date-fns";
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";

const upcomingCalendar = () => {
  const upcomingDiv = document.createElement("div");
  upcomingDiv.setAttribute("id", "upcoming");
  upcomingDiv.classList.add("upcoming");

  const calendarWrapper = document.createElement("div");
  calendarWrapper.classList.add("calendar-wrapper");
  calendarWrapper.setAttribute("id", "calendar-wrapper");

  const dateSelector = document.createElement("div");
  dateSelector.classList.add("date-selector");
  dateSelector.setAttribute("id", "date-selector");

  const dateSelectorLeft = document.createElement("div");
  dateSelectorLeft.classList.add("date-selector-left");
  const dateSelectorRight = document.createElement("div");
  dateSelectorRight.classList.add("date-selector-right");

  const monthPicker = document.createElement("button");
  monthPicker.classList.add("month-picker");
  monthPicker.textContent = "September 2021";
  const monthPickerIcon = createSVG(16, 16, svgPaths.arrow());
  monthPickerIcon.classList.add("month-picker-icon");

  // TODO Add calender function

  monthPicker.addEventListener("click", () => {
    console.log("Pick Date");
  });

  const weekNavButtonsDiv = document.createElement("div");
  weekNavButtonsDiv.classList.add("week-nav-div");

  const lastWeekButton = document.createElement("button");
  lastWeekButton.classList.add("week-nav-buttons");
  lastWeekButton.classList.add("week-nav-button-left");
  const lastWeekButtonIcon = createSVG(16, 16, svgPaths.arrow());
  lastWeekButtonIcon.classList.add("week-nav-buttons-left-arrow");
  lastWeekButton.appendChild(lastWeekButtonIcon);

  const nextWeekButton = document.createElement("button");
  nextWeekButton.classList.add("week-nav-buttons");
  const nextWeekButtonIcon = createSVG(16, 16, svgPaths.arrow());
  nextWeekButtonIcon.classList.add("week-nav-buttons-right-arrow");
  nextWeekButton.appendChild(nextWeekButtonIcon);

  weekNavButtonsDiv.appendChild(lastWeekButton);
  weekNavButtonsDiv.appendChild(nextWeekButton);

  const todayButtonDiv = document.createElement("div");
  todayButtonDiv.classList.add("today-button-div");
  const todayButton = document.createElement("button");
  todayButton.textContent = "Today";
  todayButton.classList.add("today-button");
  todayButtonDiv.appendChild(todayButton);

  // TODO Add calender function

  monthPicker.addEventListener("click", () => {
    console.log("Pick Date");
  });

  const dailyButtons = document.createElement("div");
  dailyButtons.classList.add("daily-buttons");
  dailyButtons.setAttribute("id", "daily-buttons");

  const sevenDayButtons = () => {
    let i = -2;

    const dayTray = document.createElement("div");
    dayTray.classList.add("daily-buttons-tray");
    const dateModifer = {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    while (i < 5) {
      dateModifer.days = i;

      const mainviewDay = document.createElement("button");
      mainviewDay.classList.add("upcoming-day-button");
      mainviewDay.setAttribute("id", "day" + (3 + i));
      const mainviewDayText = document.createElement("p");
      mainviewDayText.textContent = format(add(new Date(), dateModifer), "ccc");
      mainviewDayText.classList.add("day-text");
      const mainviewDayNum = document.createElement("p");
      mainviewDayNum.textContent = format(add(new Date(), dateModifer), "d");
      mainviewDay.appendChild(mainviewDayText);
      mainviewDay.appendChild(mainviewDayNum);
      dayTray.appendChild(mainviewDay);

      i++;
    }
    return dayTray;
  };

  dateSelectorLeft.appendChild(monthPicker);
  dateSelectorLeft.appendChild(monthPickerIcon);

  dateSelectorRight.appendChild(weekNavButtonsDiv);
  dateSelectorRight.appendChild(todayButtonDiv);

  dateSelector.appendChild(dateSelectorLeft);
  dateSelector.appendChild(dateSelectorRight);

  dailyButtons.appendChild(sevenDayButtons());

  calendarWrapper.appendChild(dateSelector);
  calendarWrapper.appendChild(dailyButtons);

  upcomingDiv.appendChild(calendarWrapper);

  return upcomingDiv;
};

export default upcomingCalendar;
