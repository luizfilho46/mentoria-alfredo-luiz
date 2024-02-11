import numeros from '../numerosAleatorios';

//Complexidade no melhor/pior O(n²)
function selectionSort(arr: Array<number>): Array<number> {
  let menor: number;
  for (let i = 0; i < arr.length - 1; i++) {
    menor = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[menor]) {
        menor = j;
      }
    }
    if (i !== menor) {
      [arr[i], arr[menor]] = [arr[menor], arr[i]];
    }
  }
  return arr;
}

selectionSort(numeros);
