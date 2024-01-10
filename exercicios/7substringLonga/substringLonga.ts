function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }
  let palavraAlterada = '|' + s.split('').join() + '|';
  palavraAlterada = palavraAlterada.replace(/,/g, '|');
  palavraAlterada;
  let resultado = '';

  for (let i = 1; i < palavraAlterada.length; i+=2) {
    let tamanhoString = palavraAlterada.length;
    if (!(resultado.length === palavraAlterada.length)) {
      for (let j = tamanhoString; j > i; j--) {
        if (compara(palavraAlterada, i, tamanhoString - 1)) {
          let newStriing = palavraAlterada.slice(i, tamanhoString);
          resultado = newStriing.length > resultado.length ? newStriing : resultado;
          break;
        }
        tamanhoString--;
      }
    } else break;
  }
  return resultado.replace(/\|/g, '');
}

function compara(strin: string, inicio: number, fim: number) {
  if (strin[inicio] === strin[fim] && inicio < fim) {
    return compara(strin, inicio + 1, fim - 1);
  } else if (strin[inicio] === strin[fim] && inicio === fim) {
    return true;
  } else return false;
}
