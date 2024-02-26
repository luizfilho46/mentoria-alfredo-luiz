/* Considere uma frase recebida por parâmetro. Escreva um programa em JavaScript que:

a) - Conte e exiba o número total de caracteres na frase (exceto espaços).
b) - Conte e exiba o número de palavras na frase.
c) - Converta todas as letras da frase para maiúsculas e exiba a frase modificada.
d) - Substitua todas as ocorrências de uma determinada letra (recebida como segundo parametro) por "*" e exiba a frase resultante.

Entradas propostas:

*/
const primeiraFrase = 'Mais vale pássaros voando do que dois na mão'; /*  "e" */
const segundaFrase = 'Falar é fácil, mostre-me código'; /* "a" */

function contaLetras(params) {
  let numeroLetras = 0;
  let i = 0;
  while (params[i] != undefined) {
    if (params[i] != ' ') {
      numeroLetras++;
    }
    i++;
  }
  console.log(`Numero de letras: ${numeroLetras}`);
}
function contaPalavras(params) {
  let contaPalavras = 0;
  let i = 0;
  while (params[i] != undefined) {
    if (params[i] === ' ') {
      contaPalavras++;
    }
    i++;
  }
  contaPalavras += 1;
  console.log(`Numero de palavras: ${contaPalavras}`);
}
function toUppercase(param) {
  let i = 0;
  let novaPalavra = '';
  while (param[i] !== undefined) {
    if (param.charCodeAt(i) >= 97 && param.charCodeAt(i) <= 122) {
      const letra = String.fromCharCode(param[i].charCodeAt() - 32);
      novaPalavra += letra;
    } else if (param.charCodeAt(i) >= 224 && param.charCodeAt(i) <= 297) {
      const letra = String.fromCharCode(param[i].charCodeAt() - 32);
      letra;
      novaPalavra += letra;
    } else {
      novaPalavra += param[i];
    }
    i++;
  }
  console.log(novaPalavra);
}
function replace(params, letra) {
  let palavraFinal = '';
  let i = 0;
  while (params[i] !== undefined) {
    if (params[i] === letra) {
      palavraFinal += '*';
    } else palavraFinal += params[i];
    i++;
  }
  console.log(palavraFinal);
}
console.log("\nPrimeira Frase\n");
contaLetras(primeiraFrase);
contaPalavras(primeiraFrase);
toUppercase(primeiraFrase);
replace(primeiraFrase, 'e');
contaLetras(primeiraFrase);
console.log("\nSegunda Frase\n");

contaLetras(segundaFrase);
contaPalavras(segundaFrase);
toUppercase(segundaFrase);
replace(segundaFrase, 'a');
