function qSort(vetor: Array<number>, inicio: number, fim: number) {
  if (inicio < fim) {
    let pivot = particionar(vetor, inicio, fim);
    qSort(vetor, inicio, pivot - 1);
    qSort(vetor, pivot + 1, fim);
  }
  function particionar(vetor: Array<number>, inicio: number, fim: number): number {
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
      if (vetor[j] <= vetor[fim]) {
        i = i + 1;
        [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
      }
    }
    [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
    return i + 1;
  }
}
qSort(vetor, 0, vetor.length - 1);
console.log(vetor);
