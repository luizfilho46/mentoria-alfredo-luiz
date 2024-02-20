// 2 - Escreva um algoritmo para encontrar um dado número em um vetor ordenado. Retorne o índice do número ou -1 se o número não for encontrado.

// Entradas propostas:
const arr = [3, 30, 33, 45, 46, 90, 112]; /* 35 */
const arr2 = [1, 2, 44, 48, 60, 100, 440]; /* , 44 */

function encontrarIndice(params, numero) {
  for (let i = 0; i < params.length; i++) {
    if (params[i] === numero) {
      return i;
    }
  }
  return -1;
}
console.log(encontrarIndice(arr2, 44));
console.log(encontrarIndice(arr2, 44));
