const vetor = [20, 15, 1, 2, 9, 8, 5, 6, 15, 8, 90, 10, 4];

function mergeSort(vetor: Array<number>, inicio: number = 0, fim: number = vetor.length - 1) {
  if (inicio < fim) {
    let meio = Math.floor((inicio + fim) / 2);
    mergeSort(vetor, inicio, meio);
    mergeSort(vetor, meio + 1, fim);
    intercalar(vetor, inicio, meio, fim);
  }
}
function intercalar(vetor: Array<number>, inicio: number, meio: number, fim: number) {
  let tamanho = fim - inicio + 1;
  let esquerdo = inicio;
  let direito = meio + 1;
  let ordenado = [];

  for (let i = 0; i < tamanho; i++) {
    if (esquerdo > meio) {
      ordenado[i] = vetor[direito++];
    } else if (direito > fim) {
      ordenado[i] = vetor[esquerdo++];
    } else if (vetor[esquerdo] < vetor[direito]) {
      ordenado[i] = vetor[esquerdo++];
    } else {
      ordenado[i] = vetor[direito++];
    }
  }

  for (let i = 0; i < tamanho; i++) {
    vetor[inicio + i] = ordenado[i];
  }
}

mergeSort(vetor);
console.log(vetor);
