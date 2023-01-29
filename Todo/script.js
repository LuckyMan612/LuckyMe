const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  if (task === "") {
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
  taskInput.value = "";
});
