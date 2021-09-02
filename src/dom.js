import createHeader from "./create-header";
import createSidebar from "./create-sidebar";
import createMainView from "./create-mainview";

const display = (function () {
  const container = document.querySelector("body");
  container.classList.add("body");

  container.appendChild(createHeader());

  const appHolder = document.createElement("myApp");
  appHolder.classList.add("appHolder");
  appHolder.appendChild(createSidebar());
  appHolder.appendChild(createMainView());

  container.appendChild(appHolder);
})();
