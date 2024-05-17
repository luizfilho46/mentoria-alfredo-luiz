const validaDescricao = (descricao) => {
  const tamanho = descricao.length;
  if (tamanho <= 5) {
    throw 'Descricao invalida';
  }
};
const isValidDate = (date) => {
  let validDate = new Date(date);
  if (validDate.toString() === 'Invalid Date') {
    throw 'Data inválida';
  }
};

const verificaDataInicial = (value) => {
  const hoje = new Date();
  const incial = new Date(value);
  if (incial <= hoje) {
    throw 'Data início inválida';
  }
};

const verificaMaiorData = (dataInicio, dataFim) => {
  const inicio = new Date(dataInicio);
  const fim = new Date(dataFim);
  if (inicio >= fim) {
    throw 'Datas invalidas';
  }
};
const dateFormateFront = (data) => {
  const newDate = new Date(data);
  const response = `${newDate.getFullYear()}-${newDate.getUTCMonth() + 1}-${newDate.getUTCDate()}`;
  return response;
};

module.exports = { validaDescricao, isValidDate, verificaDataInicial, verificaMaiorData, dateFormateFront };
