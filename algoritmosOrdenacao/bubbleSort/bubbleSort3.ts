// complexidade O(n²)=> nao recomendado para uso para grande quantidade de dados
const array: number[] = [1,1,1,1,1,10, 5, 4, 4, 6, 7, 2, 8, 3, 0, 1];

bubbleSort3(array);
function bubbleSort3(arr: number[]) {
  let ciclos: number = 0;
  let swap:boolean = false;
  let tamanho= arr.length-1
  do {
    swap = false;
    for (let j = 0; j < tamanho; j++) {
      ciclos++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    tamanho--
  } while (swap);

  console.log(`${arr} ciclos ${ciclos}`);
}
