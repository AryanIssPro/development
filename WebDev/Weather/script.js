// script.js

// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

// Add a task
addTaskBtn.addEventListener("click", addTask);

// Clear all tasks
clearBtn.addEventListener("click", clearTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">X</button>
  `;

  // Add functionality to delete button
  li.querySelector(".delete-btn").addEventListener("click", () => li.remove());

  // Add toggle for completed tasks
  li.querySelector("span").addEventListener("click", () => {
    li.querySelector("span").classList.toggle("completed");
  });

  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function clearTasks() {
  taskList.innerHTML = "";
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map((li) => ({
    text: li.querySelector("span").textContent,
    completed: li.querySelector("span").classList.contains("completed"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(({ text, completed }) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="${completed ? "completed" : ""}">${text}</span>
      <button class="delete-btn">X</button>
    `;

    // Add functionality to delete button
    li.querySelector(".delete-btn").addEventListener("click", () => li.remove());

    // Add toggle for completed tasks
    li.querySelector("span").addEventListener("click", () => {
      li.querySelector("span").classList.toggle("completed");
    });

    taskList.appendChild(li);
  });
}
