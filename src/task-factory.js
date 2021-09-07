// Returns an "todo" object dymanically created an the object factory.
// * Contains a title, description, due date, project, priority, with optional notes and checklists
import todoList from "./task-store";

const NewTodo = ({ title, desc }) => {
  const toDo = {
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
  };
};

export default NewTodo;
