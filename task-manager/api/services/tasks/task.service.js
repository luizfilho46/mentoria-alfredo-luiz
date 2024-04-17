const Task = require('../../model/Tasks');

const createTask = async (req, res) => {
  const newTask = req.body;
  return await Task.create(newTask);
};
const updateTaks = async (req, res) => {
  const idTask = req.params.id;
  return await Task.findByIdAndUpdate(idTask, req.body, { new: true });
};
const getAllTasks = async () => {
  const tasks = [];
  const response = await Task.find();
  response.forEach((item) => {
    let task = {
      id: item._id,
      descricao: item.descricao,
      dataInicio: item.dataInicio,
      dataFim: item.dataFim,
    };
    tasks.push(task);
  });
  return tasks;
};
const deleteTaskById = async (idValue) => {
  const taskDelete = await Task.findById(idValue);
  await Task.deleteOne(taskDelete);
  return taskDelete;
};

module.exports = { createTask, updateTaks, getAllTasks, deleteTaskById };
