// script.js
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <span class="material-symbols-outlined" onclick="deleteTask(this)">delete</span>
    `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(element) {
  const li = element.parentElement;
  li.remove();
}
