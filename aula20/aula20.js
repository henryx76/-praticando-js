function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const icon = document.createElement("i");
  icon.className = "mdi mdi-circle-outline";
  icon.onclick = () => {
    icon.classList.toggle("mdi-check-circle");
    icon.classList.toggle("mdi-circle-outline");
  };

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Deletar";
  deleteBtn.onclick = () => taskList.removeChild(taskDiv);

  taskInfo.appendChild(icon);
  taskInfo.appendChild(taskTextSpan);
  taskDiv.appendChild(taskInfo);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);
  taskInput.value = "";
}
