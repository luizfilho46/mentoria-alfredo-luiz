function generateMatrix2(n: number): number[][] {
  const response: number[][] = [];
  for (let i = 0; i < n; i++) {
    response[i] = new Array(n).fill(0);
  }

  let value = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    // Preencher da esquerda para a direita na linha superior
    for (let col = left; col <= right; col++) {
      response[top][col] = value++;
    }
    top++;

    // Preencher de cima para baixo na coluna mais à direita
    for (let row = top; row <= bottom; row++) {
      response[row][right] = value++;
    }
    right--;

    // Preencher da direita para a esquerda na linha inferior
    for (let col = right; col >= left; col--) {
      response[bottom][col] = value++;
    }
    bottom--;

    // Preencher de baixo para cima na coluna mais à esquerda
    for (let row = bottom; row >= top; row--) {
      response[row][left] = value++;
    }
    left++;
  }

  return response;
}
