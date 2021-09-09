const toggleSidebarDisplay = () => {
  const toggleSidebar = document.querySelector(".sidebar");

  toggleSidebar.style.left == "0px" || toggleSidebar.style.left == ""
    ? (toggleSidebar.style.left = "-306px")
    : (toggleSidebar.style.left = "0px");
};

export default toggleSidebarDisplay;
