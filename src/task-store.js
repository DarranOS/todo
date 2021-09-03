const todoList = (function () {
  const currentTasks = [
    {
      id: "1234",
      title: "Coding",
      desc: "Learn to code",
      dueDate: "03/09/2021",
      priority: "5 Star",
      label: ["VIP", "YES"],
      project: "Main",
    },
    {
      id: "1235",
      title: "Typing",
      desc: "Learn to code",
      dueDate: "27/09/2021",
      priority: "3 Star",
      label: "Drawing",
      project: "Art",
    },
    {
      id: "1236",
      title: "Running",
      desc: "Learn to code",
      dueDate: "07/11/2021",
      priority: "2 Star",
      label: "License",
      project: "Driving",
    },
  ];

  return currentTasks;
})();

export default todoList;
