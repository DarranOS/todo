import { format, compareAsc } from "date-fns";
import projects from "./projects";
import labels from "./labels";
import filters from "./filters";

//__SVG Generators: Path info is passed to createSVG.js which returns an SVG object
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";
import { default as randomColor, randomPastel } from "./random-color";

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const inboxDiv = document.createElement("div");
  inboxDiv.classList.add("side-div");
  const inboxIcon = createSVG(16, 16, svgPaths.inbox());
  inboxIcon.classList.add("inbox-filter");
  inboxDiv.appendChild(inboxIcon);
  const inboxText = document.createElement("p");
  inboxText.textContent = "Inbox";
  inboxDiv.appendChild(inboxText);

  const todayDiv = document.createElement("div");
  todayDiv.classList.add("side-div");
  const todayIcon = createSVG(16, 16, svgPaths.today(), format(new Date(), "d"));
  todayIcon.classList.add("today-filter");
  todayDiv.appendChild(todayIcon);
  const todayText = document.createElement("p");
  todayText.textContent = "Today";
  todayDiv.appendChild(todayText);

  const upcomingDiv = document.createElement("div");
  upcomingDiv.classList.add("side-div");
  const upcomingIcon = createSVG(16, 16, svgPaths.calendar());
  upcomingIcon.classList.add("upcoming-filter");
  upcomingDiv.appendChild(upcomingIcon);
  const upcomingText = document.createElement("p");
  upcomingText.textContent = "Upcoming";
  upcomingDiv.appendChild(upcomingText);

  // Create the project tabs

  const projectsHeadingDiv = document.createElement("button");
  projectsHeadingDiv.classList.add("side-div");

  const projectsIcon = createSVG(16, 16, svgPaths.arrow());
  projectsIcon.classList.add("project-arrow");
  projectsHeadingDiv.appendChild(projectsIcon);
  const projectsText = document.createElement("p");
  projectsText.textContent = "Projects";
  projectsText.style.fontWeight = "Bold";
  projectsHeadingDiv.appendChild(projectsText);

  const projectsTray = document.createElement("div");
  projectsTray.classList.add("projects-tray");
  projectsTray.appendChild(displayProjects());

  projectsHeadingDiv.addEventListener("click", () => {
    projectsTray.classList.toggle("projects-tray-invisible");
    projectsIcon.classList.toggle("project-arrow-closed");

    console.log("Click");
  });

  // Create the label tabs

  const labelsDiv = document.createElement("button");
  labelsDiv.classList.add("side-div");

  const labelsIcon = createSVG(16, 16, svgPaths.arrow());
  labelsIcon.classList.add("labels-arrow");
  labelsDiv.appendChild(labelsIcon);
  const labelsText = document.createElement("p");
  labelsText.textContent = "Labels";
  labelsText.style.fontWeight = "Bold";
  labelsDiv.appendChild(labelsText);

  const labelsTray = document.createElement("div");
  labelsTray.classList.add("labels-tray");
  labelsTray.appendChild(displayLabels());

  labelsDiv.addEventListener("click", () => {
    labelsTray.classList.toggle("projects-tray-invisible");
    labelsIcon.classList.toggle("project-arrow-closed");

    console.log("Click");
  });

  // Create the label tabs

  const filtersDiv = document.createElement("button");
  filtersDiv.classList.add("side-div");

  const filtersIcon = createSVG(16, 16, svgPaths.arrow());
  filtersIcon.classList.add("filters-arrow");
  filtersDiv.appendChild(filtersIcon);
  const filtersText = document.createElement("p");
  filtersText.textContent = "Filters";
  filtersText.style.fontWeight = "Bold";
  filtersDiv.appendChild(filtersText);

  const filtersTray = document.createElement("div");
  filtersTray.classList.add("filters-tray");
  filtersTray.appendChild(displayFilters());

  filtersDiv.addEventListener("click", () => {
    filtersTray.classList.toggle("projects-tray-invisible");
    filtersIcon.classList.toggle("project-arrow-closed");

    console.log("Click");
  });

  sidebar.appendChild(inboxDiv);
  sidebar.appendChild(todayDiv);
  sidebar.appendChild(upcomingDiv);
  sidebar.appendChild(projectsHeadingDiv);
  sidebar.appendChild(projectsTray);
  sidebar.appendChild(labelsDiv);
  sidebar.appendChild(labelsTray);
  sidebar.appendChild(filtersDiv);
  sidebar.appendChild(filtersTray);
  return sidebar;
};

const displayProjects = () => {
  let projectGroup = document.createElement("div");
  projects.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("side-div");
    const projectIcon = createCircleSVG(16, 16, 4, randomPastel());
    projectDiv.appendChild(projectIcon);
    let projectText = document.createElement("p");
    projectText.textContent = project;
    projectDiv.appendChild(projectText);
    projectGroup.appendChild(projectDiv);
  });
  return projectGroup;
};

const displayLabels = () => {
  let labelGroup = document.createElement("div");
  labels.forEach((label) => {
    let labelDiv = document.createElement("div");
    labelDiv.classList.add("side-div");
    const labelIcon = createSVG(16, 16, svgPaths.tag());
    labelIcon.classList.add("label-icon");

    labelDiv.appendChild(labelIcon);
    let labelText = document.createElement("p");
    labelText.textContent = label;
    labelDiv.appendChild(labelText);
    labelGroup.appendChild(labelDiv);
  });
  return labelGroup;
};

const displayFilters = () => {
  let filterGroup = document.createElement("div");
  filters.forEach((filter) => {
    let filterDiv = document.createElement("div");
    filterDiv.classList.add("side-div");

    const filterIcon = createSVG(16, 16, svgPaths.drop());
    filterIcon.classList.add("filter-icon");
    filterDiv.appendChild(filterIcon);
    let filterText = document.createElement("p");
    filterText.textContent = filter;
    filterDiv.appendChild(filterText);
    filterGroup.appendChild(filterDiv);
  });
  return filterGroup;
};

export default createSidebar;
