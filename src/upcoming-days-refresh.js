import upcomingDays from "./upcoming-days";

const refreshUpcomingDays = (number) => {
  const container = document.getElementById("upcoming-wrapper");

  // Deletes all the existing daily slots
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }

  // The number passed ensures that we refresh enough daily slots to return to where the user had scrolled down to.
  upcomingDays(number);
};
export default refreshUpcomingDays;
