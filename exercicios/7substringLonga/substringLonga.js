var palavra = 'babad';
// const palavra = 'cbd';
longestPalindrome(palavra);
function longestPalindrome(s) {
    if (s.length === 1) {
        return s;
    }
    var palavraAlterada = '|' + s.split('').join() + '|';
    palavraAlterada = palavraAlterada.replace(/,/g, '|');
    palavraAlterada;
    var resultado = '';
    for (var i = 1; i < palavraAlterada.length; i += 2) {
        var tamanhoString = palavraAlterada.length;
        if (!(resultado.length === palavraAlterada.length)) {
            for (var j = tamanhoString; j > i; j--) {
                if (compara(palavraAlterada, i, tamanhoString - 1)) {
                    // console.log(palavraAlterada.slice(i, j));
                    var newStriing = palavraAlterada.slice(i, tamanhoString);
                    resultado = newStriing.length > resultado.length ? newStriing : resultado;
                    break;
                }
                tamanhoString--;
            }
        }
        else
            break;
    }
    console.log(resultado.replace(/\|/g, ''));
    return resultado.replace(/\|/g, '');
}
function compara(strin, inicio, fim) {
    if (strin[inicio] === strin[fim] && inicio < fim) {
        return compara(strin, inicio + 2, fim - 2);
    }
    else if (strin[inicio] === strin[fim] && inicio === fim) {
        return true;
    }
    else
        return false;
}
