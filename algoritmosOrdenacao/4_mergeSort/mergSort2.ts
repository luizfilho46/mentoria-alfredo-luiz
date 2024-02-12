// Função principal que chama o merge sort
function mergeSort2(arr: number[]): number[] {
  if (arr.length <= 1) {
      return arr; // Retorna o array2 se tiver 1 elemento ou menos (caso base)
  }

  // Divide o array2 ao meio
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Chamada recursiva para ordenar cada metade
  const sortedLeft = mergeSort2(leftHalf);
  const sortedRight = mergeSort2(rightHalf);

  // Combina e ordena as metades ordenadas
  return merge(sortedLeft, sortedRight);
}

// Função para mesclar dois arrays ordenados
function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Percorre ambos os arrays comparando elementos e mesclando-os ordenadamente
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // Adiciona os elementos restantes dos arrays que não foram completamente percorridos
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Exemplo de uso
const array2 = [5, 3, 8, 2, 1, 7, 4];
console.log("Array antes do Merge Sort:", array2);
const sortedArray = mergeSort2(array2);
console.log("Array depois do Merge Sort:", sortedArray);
 