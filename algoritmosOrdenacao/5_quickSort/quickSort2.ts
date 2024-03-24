const numer = [10, 5, 9, 8, 15, 20, -1, 50, 2, 3];

function quickSot(vetor:Array<number>, inicio:number = 0, fim:number = vetor.length - 1) {
  if (inicio < fim) {
    let pivo = particiona(vetor, inicio, fim);
    quickSot(vetor, inicio, pivo - 1);
    quickSot(vetor, pivo + 1, fim);
  }

  function particiona(vetor:Array<number>, inicio:number, fim:number) {
    let indiceUltimaAltercao = inicio - 1;
    for (let i = inicio; i < fim; i++) {
      if (vetor[i] < vetor[fim]) {
        indiceUltimaAltercao++;
        [vetor[indiceUltimaAltercao], vetor[i]] = [vetor[i], vetor[indiceUltimaAltercao]];
      }
    }
    [vetor[indiceUltimaAltercao + 1], vetor[fim]] = [vetor[fim], vetor[indiceUltimaAltercao + 1]];
    return indiceUltimaAltercao + 1;
  }
}
quickSot(numer);
console.log(numer);
