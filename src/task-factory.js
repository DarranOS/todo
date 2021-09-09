// Returns an "todo" object dymanically created an the object factory.
// * Contains a title, description, due date, project, priority, with optional notes and checklists
import todoList from "./task-store";

class NewTodo {
  constructor({ todoEntry }) {
    // this.id = entry.id;
    this.title = todoEntry.title;
    this.desc = todoEntry.desc;
    this.dueDate = todoEntry.dueDate;
    // this.priority = entry.priority;
    // this.project = entry.project;
    // this.label = entry.label;
  }
}

// this.setPriority(newPriority) {
//   this.priority = newPriority;
// },
// this. setLabel(newLabel) {
//   this.priority = newLabel;

export default NewTodo;
