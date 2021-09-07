const todoList = (function () {
  const currentTasks = [
    {
      id: "1234",
      title: "Coding",
      desc: "Learn to code",
      dueDate: "03/09/2021",
      priority: "5 Star",
      label: ["JS", "CCS"],
      project: "Main",
    },
    {
      id: "1235",
      title: "Running",
      desc: "Couch to 5K",
      dueDate: "07/09/2021",
      priority: "3 Star",
      label: "Exercise",
      project: "Health",
    },
    {
      id: "1236",
      title: "Drawing Practice",
      desc: "Woody Portrait",
      dueDate: "07/10/2021",
      priority: "2 Star",
      label: "Art",
      project: "Drawing",
    },
    {
      id: "1237",
      title: "Shopping",
      desc: "Zara sale",
      dueDate: "08/09/2021",
      priority: "5 Star",
      label: "$$$$$",
      project: "Wardrobe",
    },
  ];

  return currentTasks;
})();

export default todoList;
