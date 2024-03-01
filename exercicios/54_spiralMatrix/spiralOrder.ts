const matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log('exp-> 1,2,3,4,3,2,1,5,9,5,1,2');
console.log('res-> ' + spiralOrder(matrix).toString());
console.log('exp-> 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10');
console.log('res-> ' + spiralOrder(matrix2).toString());

function spiralOrder(matrix: number[][]): number[] {
  const response: number[] = [];
  if (matrix.length === 1) return matrix[0];

  let row = matrix.length;
  let colun = matrix[0].length;
  let left = 0;
  let parada = matrix.length * matrix[0].length;

  while (parada > 0) {
    for (let i = left; i < colun; i++) {
      if (parada > 0) {
        response.push(matrix[left][i]);
        parada--;
      } else break;
    }
    for (let i = left + 1; i < row; i++) {
      if (parada > 0) response.push(matrix[i][colun - 1]);
      else break;
      parada--;
    }
    for (let coluna = colun - 2; coluna > left; coluna--) {
      if (parada > 0) response.push(matrix[row - 1][coluna]);
      else break;
      parada--;
    }
    for (let linha = row - 1; linha > left; linha--) {
      if (parada > 0) response.push(matrix[linha][left]);
      else break;
      parada--;
    }
    row--;
    colun--;
    left++;
  }
  return response;
}
