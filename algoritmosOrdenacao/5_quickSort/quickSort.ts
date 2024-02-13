const numerosQuick = [9, 8, 6, 5, 7, 4, 7, 2, 3, 5, 6, 2, 1];

function quickSort(vetor: Array<number>): Array<number> {
  if (vetor.length <= 1) return vetor;

  let pivot = vetor[0];

  let head = vetor.filter((n) => n < pivot);
  let equal = vetor.filter((n) => n === pivot);
  let tail = vetor.filter((n) => n > pivot);

  return quickSort(head).concat(equal, quickSort(tail));
}

console.log(quickSort(numerosQuick));
