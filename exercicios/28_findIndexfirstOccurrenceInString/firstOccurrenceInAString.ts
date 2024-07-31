function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) return -1;
  let palavraIgual: string = '';
  let inicio = 0;
  let atual: number = 0;
  for (let i = inicio; i < haystack.length; i++) {
    if (haystack[i] === needle[atual]) {
      palavraIgual += haystack[i];
      atual++;
      if (palavraIgual === needle) return inicio;
    } else {
      i = inicio;
      inicio++;
      atual = 0;
      palavraIgual = '';
    }
  }
  return -1;
}
console.log(strStr('mississippi', 'issip'));
