let todo = [];

function render(task) {
  return `
    <li>
      ${task}
      <button data-description="${task}">X</button>
    </li>
    `;
}

function renderTasks() {
  return todo.map(render).join("");
}

function deleteTask(delit) {
  todo = todo.filter((task) => task !== delit)
}

document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const taskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    todo.push((newTaskDescription.value));

    e.target.reset();
    taskUl.innerHTML = renderTasks();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      deleteTask(e.target.dataset.description);
      taskUl.innerHTML = renderTasks();
    }
  });
});
