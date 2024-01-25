// const numeros: number[] = [0, 1, 2, 3];
const numeros: number[] = [9, 7, 5, 6, 3, 100, 101, 1, 0, 8, 9, 10, 12, 0, 78];
// const numeros:number[]=[4,5,8,2,9,1,3,7,6]
// const numeros:number[]=[9,8,7,6,5,4,3,2,1]
let troca = 0;
let ciclos = 0;
for (let i = 1; i < numeros.length; i++) {
  ciclos++;
  let atual: number = i;
  while (numeros[atual] < numeros[atual - 1] && atual !== 0) {
    [numeros[atual], numeros[atual - 1]] = [numeros[atual - 1], numeros[atual]];
    atual--;
    troca++;
    ciclos++;
  }
}
ciclos;
troca;
