let numero = -121;

function inverteNumero(numero) {
  let converteParaString = numero.toString();
  let numeroInvertido = [];
  let quandidadeDigitos = converteParaString.length;

  for (let index = 0; index < quandidadeDigitos; index++) {
    if (index < quandidadeDigitos) {
      numeroInvertido[index] = converteParaString[quandidadeDigitos - 1];
      numeroInvertido[quandidadeDigitos - 1] = converteParaString[index];
      quandidadeDigitos -= 1;
    }
  }
  let numeroFinal = numeroInvertido.toString().replace(/,/g, '');
  return parseInt(numeroFinal) === numero ? true : false;
}
