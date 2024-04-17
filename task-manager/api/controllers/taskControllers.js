const { createTask, updateTaks, getAllTasks, deleteTaskById } = require('../services/tasks/task.service');

const taskControllers = {
  create: async (req, res) => {
    try {
      const response = await createTask(req, res);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ msg: 'Erro ao criar task', erro: error });
    }
  },
  edit: async (req, res) => {
    try {
      const response = await updateTaks(req, res);
      return res.json(response);
    } catch (error) {
      return res.send(`Erro ao editar:${error}`);
    }
  },
  delete: async (req, res) => {
    try {
      const idTask = req.params.id;
      const response = await deleteTaskById(idTask);
      return res.status(202).json(response);
    } catch (error) {
      res.send(`Erro ao deletar task: ${error}`);
    }
  },
  get: async (req, res) => {
    try {
      const response = await getAllTasks();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).send(`Erro: ${error}`);
    }
  },
};
module.exports = taskControllers;
