generateMatrix(4);

function generateMatrix(n: number): number[][] {
  let response: number[][] = [];
  for (let i = 0; i < n; i++) {
    response[i] = [];
  }
  let value = 1;
  let row = n;
  let colun = n;
  let left = 0;
  let rigth = colun - 1;
  while (value <= n * n) {
    // direita
    for (let colunCurrent = left; colunCurrent < colun; colunCurrent++) {
      response[left][colunCurrent] = value;
      value++;
    }
    // baixao
    for (let rowCurrent = left + 1; rowCurrent < row; rowCurrent++) {
      response[rowCurrent][rigth] = value;
      value++;
    }
    // esquerda
    for (let colunCurrent = rigth - 1; colunCurrent > left; colunCurrent--) {
      response[row - 1][colunCurrent] = value;
      value++;
    }
    // sobe
    for (let rowCurrent = row - 1; rowCurrent > left; rowCurrent--) {
      response[rowCurrent][left] = value;
      value++;
    }
    row--;
    colun--;
    left++;
    rigth--;
  }

  return response;
}
