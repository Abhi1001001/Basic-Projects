// script.js
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let date = new Date();

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span><h4>Date : ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</h4> ${taskText}</span>
        <span class="material-symbols-outlined" onclick="deleteTask(this)">delete</span>
    `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(element) {
  const li = element.parentElement;
  li.remove();
}
