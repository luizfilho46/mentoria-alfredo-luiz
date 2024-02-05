let palavras = ['flower', 'flow', 'flight'];
longestCommonPrefix(palavras)

function longestCommonPrefix(strs: string[]): string {
  console.log(strs[0][0]);
  let prefixo = '';
  let menorPalavra = strs[0].length;

  strs.forEach((item) => {
    if (item.length < menorPalavra) menorPalavra = item.length;
  });

  for (let i = 0; i < menorPalavra; i++) {
    if (strs.every((element) => element[i] === strs[0][i])) {
      prefixo += strs[0][i];
    } else {
      break;
    }
  }
  return prefixo;
}
