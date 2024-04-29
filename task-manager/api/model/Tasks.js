const mongoose = require('mongoose');

const task = new mongoose.Schema(
  {
    descricao: String,
    dataInicio: Date,
    dataFim: Date,
  },
  {
    versionKey: false,
  }
);

const Task = mongoose.model('Tasks', task);

module.exports = Task;
