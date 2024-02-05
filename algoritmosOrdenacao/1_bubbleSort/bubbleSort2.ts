// complexidade O(n²)=> nao recomendado para uso para grande quantidade de dados
const arra: number[] = [1,1,1,1,1,10, 5, 4, 4, 6, 7, 2, 8, 3, 0, 1];

bubbleSort2(arra);
function bubbleSort2(arr: number[]) {
  let ciclos: number = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      ciclos++
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(`${arr} ciclos ${ciclos}`);
}
