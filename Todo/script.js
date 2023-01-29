const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const toggleCompletedButton = document.getElementById("toggle-completed-button");
const completedList = document.getElementById("completed-list");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  if (task === "") {
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
  taskItem.addEventListener("click", function() {
    taskItem.style.textDecoration = "line-through";
    completedList.appendChild(taskItem);
    taskList.removeChild(taskItem);
    completedList.style.display = "block";
  });
  taskInput.value = "";
});

toggleCompletedButton.addEventListener("click", function() {
  completedList.style.display = completedList.style.display === "none" ? "block" : "none";
});
