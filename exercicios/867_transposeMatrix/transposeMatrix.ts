const matx = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
function transpose(matrix: number[][]): number[][] {
  const linha = matx.length;
  const colun = matx[0].length;
  let transposta: number[][] = [];
  for (let i = 0; i < colun; i++) {
    transposta[i] = [];
  }

  for (let i = 0; i < linha; i++) {
    for (let j = 0; j < colun; j++) {
      transposta[j][i] = matx[i][j];
    }
  }
  return transposta;
}
