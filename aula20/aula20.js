document.addEventListener('DOMContentLoaded', function() {
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', addTask);
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("Por favor, insira uma tarefa.");
      return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("change", () => {
      taskDiv.classList.toggle("completed", check.checked);
  });

  const taskText = document.createElement("span");
  taskText.className = "text";
  taskText.textContent = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Deletar";
  deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskDiv);
  });

  taskDiv.appendChild(check);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
}