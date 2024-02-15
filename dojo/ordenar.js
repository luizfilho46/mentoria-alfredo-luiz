// 1 - Escreva um algoritmo para ordenar um vetor de números em ordem crescente. Use JavaScript sem tipagem estática.

// Entradas propostas:
const arr = [1, 2, 4, 3, 1, 8];
const arr2 = [7, 6, 5, 4, 3, 2, -1, 0, 8, 9];

function ordenarVetor(params) {
  for (let j = 0; j < params.length; j++) {
    for (let i = 0; i < params.length; i++) {
      if (params[i] > params[i + 1]) {
        [params[i], params[i + 1]] = [params[i + 1], params[i]];
      }
    }
  }
  console.log(params);
}

ordenarVetor(arr2);
ordenarVetor(arr2);
