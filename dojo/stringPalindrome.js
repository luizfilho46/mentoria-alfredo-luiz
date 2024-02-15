// 3 - Escreva um algoritmo para identificar uma string palíndrome.

// Entradas propostas:
const primeira = 'grupoboticario';
const segunda = 'belezanawebbewanazeleb';
const terceira = 'gabriel';
const quarta = 'ana';

/**
 * Verifica se uma palavra é palindromica
 * @param {string} str string
 * @returns {boolean}
 * @returns boolean
 */
function palindrome(str) {
  const meioString = Math.floor(str.length / 2);
  let fim = str.length - 1;

  for (i = 0; i < meioString; i++) {
    if (str[i] !== str[fim]) {
      return false;
    }
    fim--;
  }
  return true;
}

console.log(`${primeira}: ${palindrome(primeira)}`);
console.log(`${segunda}: ${palindrome(segunda)}`);
console.log(`${terceira}: ${palindrome(terceira)}`);
console.log(`${quarta}: ${palindrome(quarta)}`);
