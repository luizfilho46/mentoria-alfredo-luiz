
// complexidade O(n²)=> nao recomendado para uso para grande quantidade de dados
const arr: number[] = [10, 5, 4, 4, 6, 7, 2, 8, 3, 0, 1]


bubbleSort(arr)
function bubbleSort(arr: number[]) {
  let ciclos:number=0
  for (let i  = 0; i  < arr.length-1; i ++) {
    for (let j = 0; j < arr.length - 1; j++){
      ciclos++
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  console.log(`${arr} ciclos ${ciclos}`);
}