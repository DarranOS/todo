// Returns an "todo" object dymanically created an the object factory.
// * Contains a title, description, due date, project, priority, with optional notes and checklists
import todoList from "./task-create";

const newTodo = ({ title, desc }) => ({
  id: new Date(),
  title,
  desc,
  dueDate: "date due",
  priority: "5 Star",
  project: "project",
  label: "tags",
  setPriority(newPriority) {
    this.priority = newPriority;
  },
  setLabel(newLabel) {
    this.priority = newLabel;
  },
});

export default newTodo;
