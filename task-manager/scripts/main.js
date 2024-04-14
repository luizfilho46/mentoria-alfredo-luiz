const apiUrl = 'http://localhost:3001/tasks';
const addTaskInput = document.getElementById("addtaskinput");
const addTaskButton = document.getElementById("addtaskbutton");
const error = document.getElementById("error");
const taskPane = document.getElementById("tasklist");

addTaskButton.addEventListener("click", onAddTaskButtonClick);

async function onAddTaskButtonClick() {
  const task = addTaskInput.value.trim();
  if (task.length === 0) {
    showDialog("Campo Vazio. Por favor, preencha o campo de tarefa");
    return;
  }
  try {
    const response = await salvarTarefaAPI(task);
    if (response) {
      const savedTask = response.descricao;
      addTaskToUI(savedTask);
    } else {
      showDialog("Erro ao salvar a tarefa");
    }
  } catch (error) {
    console.error('Erro ao salvar tarefa:', error);
    showDialog("Erro ao salvar a tarefa");
  }
  addTaskInput.value = "";
}

function addTaskToUI(task) {
  const taskItem = createTaskElement(task);
  taskPane.appendChild(taskItem);
}

function createTaskElement(task) {
  const taskItem = document.createElement("div");
  const taskText = document.createElement("span");
  const editTask = createButton("Editar");
  const deleteTask = createButton("Apagar");

  taskItem.className = "taskitem";
  taskText.className = "tasktext";
  editTask.className = "edittask";
  deleteTask.className = "deletetask";

  taskText.textContent = task.descricao ?? "Erro ao criar a tarefa!";

  taskItem.appendChild(taskText);
  taskItem.appendChild(editTask);
  taskItem.appendChild(deleteTask);

  deleteTask.addEventListener("click", async () => {
    await removerTarefaAPI(task.id)
    taskPane.removeChild(taskItem);
  });

  editTask.addEventListener("click", () => {
    editTaskText(taskText);
  });

  return taskItem;
}

function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  return button;
}

function editTaskText(taskText) {
  const inputField = document.createElement("input");
  inputField.value = taskText.textContent;
  taskText.replaceWith(inputField);

  inputField.focus();

  inputField.addEventListener("blur", () => {
    taskText.textContent = inputField.value;
    inputField.replaceWith(taskText);
  });

  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      taskText.textContent = inputField.value;
      inputField.replaceWith(taskText);
    }
  });
}

function showDialog(message) {
  const alertBox = document.createElement("div");
  alertBox.className = "warning";
  const span = document.createElement("span");
  span.textContent = message;
  const closeButton = createButton("x");
  closeButton.addEventListener("click", () => error.removeChild(alertBox));
  alertBox.appendChild(span);
  alertBox.appendChild(closeButton);
  error.appendChild(alertBox);
  setTimeout(() => error.removeChild(alertBox), 7000);
}

async function buscarTarefas() {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    showDialog('Erro ao buscar tarefas');
    return [];
  }
  const data = await response.json();
  return data.results;
}

async function salvarTarefaAPI(tarefa) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descricao: tarefa, data: new Date() }),
  });
  if (!response.ok) {
    showDialog('Erro ao salvar tarefa');
    return null;
  }
  const data = await response.json();
  return data;
}

async function removerTarefaAPI(tarefaId) {
  const response = await fetch(apiUrl + `/${tarefaId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    showDialog('Erro ao remover tarefa');
    return null;
  }
  const data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const tasks = await buscarTarefas();
    tasks.forEach(task => addTaskToUI(task));
  } catch (error) {
    showDialog("Erro ao buscar as tarefas" + error.message);
  }
});