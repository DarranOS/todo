import _ from "lodash";
import "./style.css";
import newTodo from "./createtask";
import projects from "./projects";
import display from "./dom";

const newTask = newTodo({ title: "FakeTitle", desc: "FakeDesc" });
projects.push(newTask);

// document.body.appendChild(component());