// Returns an "todo" object dymanically created an the object factory.
// * Contains a title, description, due date, project, priority, with optional notes and checklists

const newTodo = ({ title, desc }) => ({
  title,
  desc,
  dueDate: "date due",
  priority: "5 Star",
  setPriority(newPriority) {
    this.priority = newPriority;
  },
});

export default newTodo;
