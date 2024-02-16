/*
4 - Escreva um algoritmo para encontrar um dado número em um vetor ordenado. Retorne o índice do número ou -1 se o número não for encontrado. Use a busca binaria.
*/

// Entradas propostas:
const primeiroArray = [3, 30, 33, 45, 46, 90, 112]; /*35 */
const segundoArray = [1, 2, 44, 48, 60, 100, 440]; /*44 */
const terceiroArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function buscaBinaria(arr, numero) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);
    if (arr[meio] === numero) {
      encontrado = true;
      console.log(meio);
      return meio;
    } else if (arr[meio] > numero) {
      fim = meio - 1;
    } else if (arr[meio] < numero) {
      inicio = meio + 1;
    }
  }
  console.log(-1);
}

buscaBinaria(primeiroArray, 3);
buscaBinaria(segundoArray, 60);
buscaBinaria(terceiroArray, 6);
buscaBinaria(terceiroArray, 10);
