const validaDescricao = (descricao) => {
  const tamanho = descricao.length;
  if (tamanho <= 5) {
    throw 'Descricao invalida';
  }
};
const isValidDate = (...date) => {
  for (let i = 0; i < date.length; i++) {
    let validDate = new Date(date[i]);
    if (validDate.toString() === 'Invalid Date') {
      throw 'Data inválida';
    }
  }
};

const verificaDataInicial = (value) => {
  const hoje = new Date();
  const incial = new Date(value);
  if (incial <= hoje) {
    throw 'Data início inválida';
  }
};

const verificaMariorData = (dataInicio, dataFim) => {
  const inicio = new Date(dataInicio);
  const fim = new Date(dataFim);
  if (inicio >= fim) {
    throw 'Datas invalidas';
  }
};
const dateFormateFront = (data) => {
  console.log('data ', data);
  const ano = new Date(data).getFullYear();
  console.log('ano ', ano);
  const mes = new Date(data).getUTCMonth();
  console.log('mes ', mes);
  const dia = new Date(data).getDate();
  console.log('dia ', dia);
  const response = `${ano}-${mes}-${dia}`;
  console.log('response erro', response);
  return response;
};

module.exports = { validaDescricao, isValidDate, verificaDataInicial, verificaMariorData, dateFormateFront };
