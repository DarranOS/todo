function createSVG() {
  let xmlns = "http://www.w3.org/2000/svg";
  let boxWidth = arguments[0];
  let boxHeight = arguments[1];
  let coords = arguments[2];

  let svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "width", boxWidth);
  svgElem.setAttributeNS(null, "height", boxHeight);

  let g = document.createElementNS(xmlns, "g");
  svgElem.appendChild(g);

  let path = document.createElementNS(xmlns, "path");
  path.setAttributeNS(null, "d", coords);
  g.appendChild(path);

  if (arguments.length > 3) {
    let text = document.createElementNS(xmlns, "text");
    text.setAttributeNS(null, "width", boxWidth);
    text.setAttributeNS(null, "height", boxHeight);
    text.setAttributeNS(null, "x", boxWidth / 2);
    text.setAttributeNS(null, "y", "13");
    text.textContent = arguments[3];
    text.style.fontSize = "9px";
    text.style.fontFamily =
      "-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
    text.style.textAnchor = "middle";
    g.appendChild(text);
  }

  let svgContainer = document.createElement("div");
  svgContainer.classList.add("svg-icon");
  svgContainer.appendChild(svgElem);
  return svgContainer;
}

//<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
//width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
//<circle fill="#FFFFFF" stroke="#000000" stroke-width="1.1374" stroke-miterlimit="10" cx="25" cy="25" r="15"/>

function createCircleSVG() {
  let xmlns = "http://www.w3.org/2000/svg";
  let boxWidth = arguments[0];
  let boxHeight = arguments[1];
  let radius = arguments[2];
  let color = arguments[3];

  let svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "width", boxWidth);
  svgElem.setAttributeNS(null, "height", boxHeight);

  let g = document.createElementNS(xmlns, "g");
  svgElem.appendChild(g);

  let circle = document.createElementNS(xmlns, "circle");
  circle.setAttributeNS(null, "r", radius);
  circle.setAttributeNS(null, "cx", "8");
  circle.setAttributeNS(null, "cy", "8");
  circle.style.fill = color;
  // circle.setAttributeNS(
  //   null,
  //   "transform",
  //   "scale(" + boxWidth / 50 + ", " + boxHeight / 50 + ")"
  // );
  g.appendChild(circle);

  let svgContainer = document.createElement("div");
  svgContainer.classList.add("svg-circle");
  svgContainer.appendChild(svgElem);
  return svgContainer;
}

export default createSVG;
export { createCircleSVG };
