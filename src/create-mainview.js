import upcomingCalendar from "./upcoming-calendar";
import upcomingDays from "./upcoming-days";

const createMainView = () => {
  const mainView = document.createElement("div");
  mainView.classList.add("mainview");

  mainView.appendChild(upcomingCalendar());
  mainView.appendChild(upcomingDays());
  return mainView;
};

export default createMainView;
