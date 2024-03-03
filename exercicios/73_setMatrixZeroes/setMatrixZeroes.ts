/**
 Do not return anything, modify matrix in-place instead.
 */

// const ts = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
const ts = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 0, 1, 5],
];
setZeroes(ts);
function setZeroes(matrix: number[][]): void {
  let linhaArray: number[] = [];
  let colunaArray: number[] = [];
  let coluna = matrix[0].length;
  let linha = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 0) {
              linhaArray.push(i);
              colunaArray.push(j);
          }
      }
  }
  for (let i = 0; i < linhaArray.length; i++) {
      for (let j = 0; j < coluna; j++) {
          matrix[linhaArray[i]][j] = 0;
      }

      for (let j = 0; j < linha; j++) {
          matrix[j][colunaArray[i]] = 0
      }
  }
  console.log(matrix)
}
