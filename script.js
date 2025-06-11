function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete on double-click
  li.addEventListener("dblclick", function () {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
