//__SVG Generators: Path info is passed to createSVG.js which returns an SVG object
import { default as createSVG, createCircleSVG } from "./create-svg";
import svgPaths from "./svgPaths";
import { default as randomColor, randomPastel } from "./random-color";
import createNewTask from "./task-create-new";
import toggleSidebarDisplay from "./toggle-sidebar";

const createHeader = () => {
  const topBar = document.createElement("div");
  topBar.classList.add("top-bar");

  const topBarInner = document.createElement("div");
  topBarInner.classList.add("top-bar-inner");

  // Creates topBar "trays"
  const leftControl = document.createElement("div");
  leftControl.classList.add("control");
  const rightControl = document.createElement("div");
  rightControl.classList.add("control");

  // Creates Left side buttons and search field
  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu-button");
  menuButton.classList.add("top-bar-button");
  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home-button");
  homeButton.classList.add("top-bar-button");

  // Search Bar
  const searchDiv = document.createElement("div");
  const searchButton = document.createElement("button");
  searchButton.setAttribute("id", "search-bar");
  searchButton.classList.add("search-bar");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.setAttribute("placeholder", "Search");
  searchInput.classList.add("input");

  const searchF = document.createElement("p");
  searchF.classList.add("search-f");
  searchF.textContent = "f";

  const searchIcon = createSVG(20, 20, svgPaths.search());
  searchIcon.classList.add("search-button");

  // Creates Right side topBar tray buttons
  const bellButton = document.createElement("button");
  bellButton.setAttribute("id", "bell-button");
  bellButton.classList.add("top-bar-button");

  const plusButton = document.createElement("button");
  plusButton.setAttribute("id", "plus-button");
  plusButton.classList.add("top-bar-button");

  // Event Listeners for Plus Icon.
  menuButton.addEventListener("click", toggleSidebarDisplay);
  plusButton.addEventListener("click", createNewTask);

  // Draws and appends SVGS
  searchButton.appendChild(searchIcon);
  menuButton.appendChild(createSVG(16, 16, svgPaths.menu()));
  homeButton.appendChild(createSVG(16, 16, svgPaths.home()));
  bellButton.appendChild(createSVG(16, 16, svgPaths.bell()));
  plusButton.appendChild(createSVG(16, 16, svgPaths.plus()));

  searchButton.appendChild(searchInput);
  searchButton.appendChild(searchF);

  // Event Listeners for search bar mouseovers
  searchButton.addEventListener("mouseover", (e) => {
    e.stopPropagation();
    console.log("IN");
    searchF.classList.add("search-f-active");
    searchButton.classList.add("search-bar-active");
    searchInput.classList.add("input-active");
    searchIcon.classList.add("search-button-active");
  });

  searchButton.addEventListener("mouseout", (e) => {
    e.stopPropagation();
    console.log("OUT");
    searchF.classList.remove("search-f-active");
    searchButton.classList.remove("search-bar-active");
    searchInput.classList.remove("input-active");
    searchIcon.classList.remove("search-button-active");
  });

  leftControl.appendChild(menuButton);
  leftControl.appendChild(homeButton);
  leftControl.appendChild(searchButton);

  rightControl.appendChild(plusButton);
  rightControl.appendChild(bellButton);

  topBar.appendChild(topBarInner);
  topBarInner.appendChild(leftControl);
  topBarInner.appendChild(rightControl);

  return topBar;
};

export default createHeader;
