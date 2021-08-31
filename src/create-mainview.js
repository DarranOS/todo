const createMainView = () => {
  const mainView = document.createElement("div");
  mainView.classList.add("mainview");

  const mainText = document.createElement("p");
  mainText.textContent = "HHHEYYYEYYEYEYYE";
  mainView.appendChild(mainText);

  return mainView;
};

export default createMainView;
