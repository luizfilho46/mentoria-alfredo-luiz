// const apiUrl = 'https://mocki.io/v1/890c64c6-ce10-458c-b1b7-afefe475bc05';
const apiUrl = 'http://localhost:3000/tasks';
const addTaskInput = document.getElementById('addtaskinput');
const startDateInput = document.getElementById('startdate');
const endDateInput = document.getElementById('enddate');
const addTaskButton = document.getElementById('addtaskbutton');
const error = document.getElementById('error');
const taskPane = document.getElementById('tasklist');

addTaskButton.addEventListener('click', onAddTaskButtonClick);

async function onAddTaskButtonClick() {
  const task = addTaskInput.value.trim();
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  if (task.length === 0 || startDate.length === 0 || endDate.length === 0) {
    showDialog('Por favor, preencha todos os campos');
    return;
  }

  try {
    const response = await salvarTarefaAPI(task, startDate, endDate);
    if (response) {
      const savedTask = response;
      addTaskToUI(savedTask);
    } /* else {
      showDialog('Erro ao salvar a tarefa');
    } */
  } catch (error) {
    showDialog(`Erro ao salvar a tarefa ${error.message}`);
  }

  addTaskInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
}

function addTaskToUI(task) {
  const taskItem = createTaskElement(task);
  taskPane.appendChild(taskItem);
}

function createTaskElement(task) {
  const taskItem = document.createElement('div');
  const taskText = document.createElement('span');
  const editTask = createButton('Editar');
  const deleteTask = createButton('Apagar');

  const startDateLabel = document.createElement('label');
  const startDateInput = document.createElement('input');
  const endDateLabel = document.createElement('label');
  const endDateInput = document.createElement('input');

  taskItem.className = 'taskitem';
  taskItem.setAttribute('data-task-id', task.id);
  taskText.className = 'tasktext';
  editTask.className = 'edittask';
  deleteTask.className = 'deletetask';
  startDateLabel.textContent = 'Início: ';
  endDateLabel.textContent = 'Término: ';

  taskText.textContent = task.descricao ?? 'Erro ao criar a tarefa!';
  startDateInput.value = task.dataInicio;
  endDateInput.value = task.dataFim;

  startDateInput.setAttribute('readonly', '');
  endDateInput.setAttribute('readonly', '');

  taskItem.appendChild(taskText);
  taskItem.appendChild(startDateLabel);
  taskItem.appendChild(startDateInput);
  taskItem.appendChild(document.createElement('br'));
  taskItem.appendChild(endDateLabel);
  taskItem.appendChild(endDateInput);
  taskItem.appendChild(editTask);
  taskItem.appendChild(deleteTask);

  deleteTask.addEventListener('click', async () => {
    await removerTarefaAPI(task.id);
    taskPane.removeChild(taskItem);
  });

  editTask.addEventListener('click', () => {
    editTaskText(taskText, startDateInput, endDateInput, task.id);
  });
  return taskItem;
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

async function editTaskApi(taskId, descricao, dataInicio, dataFim) {
  const response = await fetch(apiUrl + `/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descricao, dataInicio, dataFim }),
  });
  if (!response.ok) {
    showDialog('Erro ao editar tarefa');
    return null;
  }
  const data = await response.json();
  return data;
}

function editTaskText(taskText, startDateInput, endDateInput, taskId) {
  const descriptionInput = document.createElement('input');
  descriptionInput.value = taskText.textContent;

  taskText.replaceWith(descriptionInput);
  startDateInput.removeAttribute('readonly');
  endDateInput.removeAttribute('readonly');

  descriptionInput.focus();

  descriptionInput.addEventListener('blur', () => {
    taskText.textContent = descriptionInput.value;
    // descriptionInput.replaceWith(taskText);
  });

  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      taskText.textContent = descriptionInput.value;
      descriptionInput.replaceWith(taskText);
    }
  });

  [startDateInput, endDateInput].forEach((input) => {
    input.addEventListener('blur', async () => {
      const formattedStartDate = formatDate(startDateInput.value);
      const formattedEndDate = formatDate(endDateInput.value);
      startDateInput.value = formattedStartDate;
      endDateInput.value = formattedEndDate;
      startDateInput.setAttribute('readonly', '');
      endDateInput.setAttribute('readonly', '');
      await editTaskApi(taskId, descriptionInput.value, formattedStartDate, formattedEndDate);
    });

    input.addEventListener('keypress', async (e) => {
      console.log(e);
      if (e.key === 'Enter') {
        const formattedStartDate = formatDate(startDateInput.value);
        const formattedEndDate = formatDate(endDateInput.value);
        startDateInput.value = formattedStartDate;
        endDateInput.value = formattedEndDate;
        startDateInput.setAttribute('readonly', '');
        endDateInput.setAttribute('readonly', '');
        await editTaskApi(taskId, descriptionInput.value, formattedStartDate, formattedEndDate);
      }
    });
  });
}

function showDialog(message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'warning';
  const span = document.createElement('span');
  span.textContent = message;
  const closeButton = createButton('x');
  closeButton.addEventListener('click', () => error.removeChild(alertBox));
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
  return data;
}

async function salvarTarefaAPI(descricao, dataInicio, dataFim) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descricao, dataInicio, dataFim }),
  });
  if (!response.ok) {
    showDialog('Erro ao salvar tarefa');
    return null;
  }
  const data = await response.json();
  return data;
}

async function removerTarefaAPI(taskId) {
  const response = await fetch(`${apiUrl}/${taskId}`, {
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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const tasks = await buscarTarefas();
    tasks.forEach((task) => addTaskToUI(task));
  } catch (error) {
    showDialog(`Erro ao buscar as tarefas ${error.message}`);
  }
});
