import upcomingDays from "./upcoming-days";

const refreshUpcomingDays = () => {
  console.log("Refreshing 2");
  const container = document.getElementById("upcoming-wrapper");
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  }

  upcomingDays();
};
export default refreshUpcomingDays;
