let todoList = [];
function renderTasks() {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';
  todoList.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div>
        <button onclick="completeTask(${index})">Complete</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    todoListElement.appendChild(listItem);
  });
}
function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = {
      text: taskText,
      completed: false,
    };
    todoList.push(newTask);
    taskInput.value = '';
    renderTasks();
  }
}
function completeTask(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTasks();
}
function deleteTask(index) {
  todoList.splice(index, 1);
  renderTasks();
}
renderTasks();
