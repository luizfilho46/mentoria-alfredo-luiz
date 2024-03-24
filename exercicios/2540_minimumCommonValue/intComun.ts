const n10 = [1, 2, 3, 6];
const n20 = [2, 3, 4, 5];
console.log(getCommons(n10, n20));

function getCommons(nums1: number[], nums2: number[]): number {
  for (let i = 0; i < nums1.length; i++) {
    let response = bsc(nums2, nums1[i]);
    console.log('Res: ' + response);
    if (response > 0) {
      return response;
    }
  }
  return -1;
}
function bsc(lista: number[], numero: number, inicio = 0, fim = lista.length - 1): number {
  let meio = Math.floor((inicio + fim) / 2);
  if (inicio <= fim) {
    if (lista[meio] === numero) {
      console.log(numero);
      return numero;
    } else if (lista[meio] > numero) {
      return bsc(lista, numero, inicio, meio - 1);
    } else if (lista[meio] < numero) {
      return bsc(lista, numero, meio + 1, fim);
    }
  }
  return -1;
}
