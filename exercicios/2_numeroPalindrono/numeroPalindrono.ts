let numero = -121;
isPalindrome(numero)
function isPalindrome(x: number): boolean {
  let converteParaString = x.toString();
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
  return parseInt(numeroFinal) === x ? true : false;
}
