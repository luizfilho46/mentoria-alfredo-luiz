const arrs = [1, 2, 2, 1, 1, 3];
uniqueOccurrences(arrs);
function uniqueOccurrences(arr: number[]): boolean {
  const unicos: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let repet = false;
    for (let j = 0; j < unicos.length; j++) {
      if (arr[i] === unicos[j]) {
        repet = true;
        break;
      }
    }
    if (!repet) {
      unicos.push(arr[i]);
    }
  }

  const quantidade = [];
  for (let i = 0; i < unicos.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (unicos[i] === arr[j]) {
        count++;
      }
    }
    quantidade.push(count);
  }
  for (let i = 0; i < quantidade.length - 1; i++) {
    for (let j = 0; j < quantidade.length; j++) {
      if (quantidade[i] === quantidade[j] && i !== j) {
        return false;
      }
    }
  }
  quantidade;
  console.log(`nao repete`);
  return true;
}
