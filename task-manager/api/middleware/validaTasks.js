const { validaDescricao, isValidDate, verificaDataInicial, verificaMariorData } = require('../util/tasks');

const validaTask = (req, res, next) => {
  const { descricao, dataInicio, dataFim } = req.body;
  validaDescricao(descricao);
  isValidDate(dataInicio, dataFim);
  verificaDataInicial(dataInicio);
  verificaMariorData(dataInicio, dataFim);
  next();
};

module.exports = validaTask;
