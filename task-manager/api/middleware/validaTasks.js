const { validaDescricao, isValidDate, verificaDataInicial, verificaMaiorData } = require('../util/tasks');

const validaTask = (req, res, next) => {
  const { descricao, dataInicio, dataFim } = req.body;
  try {
    validaDescricao(descricao);
    isValidDate(dataInicio);
    isValidDate(dataFim);
    verificaDataInicial(dataInicio);
    verificaMaiorData(dataInicio, dataFim);
    next();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = validaTask;
