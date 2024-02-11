const numeros: number[] = [9, 7, 5, 6, 3, 100, 101, 1, 0, 8, 9, 10, 12, 0, 78];
function InsertionSort(vetor: Array<number>) {
  let atual;
  for (let i = 0; i < vetor.length; i++) {
    let j = i - 1; //ultima posicao ordenada
    atual = vetor[i];
    while (j >= 0 && atual < vetor[j]) {
      vetor[j + 1] = vetor[j];
      j--;
    }
    vetor[j + 1] = atual;
  }
  return vetor;
}

// video de referencia: https://www.youtube.com/watch?v=vXOzjDX69PM
