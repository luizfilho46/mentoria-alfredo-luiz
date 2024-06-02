function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let response: string[] = s.slice(0, numRows).split('');
  let descendo: boolean = false;
  let indiceZigZag: number = numRows - 1;

  for (let i = numRows; i < s.length; i++) {
    if (descendo) {
      response[indiceZigZag + 1] += s[i];
      indiceZigZag++;

      if (indiceZigZag === numRows - 1) descendo = false;
    } else {
      response[indiceZigZag - 1] += s[i];
      indiceZigZag--;

      if (indiceZigZag === 0) descendo = true;
    }
  }
  console.log(response.join(''));
  return response.join('');
}
convert('AB', 1);
convert('PAYPALISHIRING', 4);
