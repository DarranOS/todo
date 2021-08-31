import createHeader from "./create-header";
import createSidebar from "./create-sidebar";
import createMainView from "./create-mainview";

const display = (function () {
  const container = document.querySelector("body");
  container.classList.add("body");

  container.appendChild(createHeader());
  container.appendChild(createSidebar());
  container.appendChild(createMainView());
})();
