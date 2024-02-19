// 5 - Crie uma matriz m x n (são dados) com número inteiros gerados aleatoriamente usando a função abaixo.

function gerarNumeroAleatorioEntreUmECem() {
  return Math.floor(Math.random() * 100) + 1;
}
// a) - Exiba a matriz original na tela.;
// b) - Calcule e exiba a soma de todos os inteiros da diagonal principal da matriz;
// c) - Substitua todos os números pares da matriz por 0.
// d) - Exiba a matriz modificada na tela.

// As entradas propostas são:
// 3, 3
// 10, 10
// 8, 8

function matrizQuadrada(tamanho) {
  const matriz = [];
  let soma = 0;

  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      matriz[i][j] = gerarNumeroAleatorioEntreUmECem();
      if (i === j) {
        soma += matriz[i][i];
      }
    }
  }
  // console.log(matriz);

  for (let i = 0; i < tamanho; i++) {
    console.log(`[ ${matriz[i]}]`);
  }
  console.log(soma);

  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (matriz[i][j] % 2 === 0) {
        matriz[i][j] = 0;
      }
    }
  }
  // console.log(matriz);

  for (let i = 0; i < tamanho; i++) {
    console.log(`[ ${matriz[i]}]`);
  }
}

matrizQuadrada(10);
