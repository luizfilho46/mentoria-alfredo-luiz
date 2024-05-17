const { createTask, updateTaks, getAllTasks, deleteTaskById } = require('../services/tasks/task.service');

const taskControllers = {
  create: async (req, res) => {
    try {
      const response = await createTask(req.body);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ msg: 'Erro ao criar task', erro: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const response = await updateTaks(req);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ msg: `Erro ao editar task`, erro: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const idTask = req.params.id;
      const response = await deleteTaskById(idTask);
      return res.status(202).json(response);
    } catch (error) {
      res.status(500).json({ msg: `Erro ao deletar task`, erro: error.message });
    }
  },
  get: async (req, res) => {
    try {
      const response = await getAllTasks();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ msg: `Erro na solicitação`, erro: error.message });
    }
  },
};
module.exports = taskControllers;
