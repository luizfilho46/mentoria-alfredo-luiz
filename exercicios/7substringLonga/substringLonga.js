var palavra = 'banana';
longestPalindrome(palavra);
function longestPalindrome(s) {
    if (s.length === 1) {
        return s;
    }
    s = '|' + s.split('').join() + '|';
    s = s.replace(/,/g, '|');
    var resultado = '';
    for (var i = 1; i < s.length; i += 2) {
        var tamanhoString = s.length;
        if (resultado.length < s.slice(i, tamanhoString).length) {
            console.log(i);
            for (var j = tamanhoString; j > i; j--) {
                if (compara(s, i, tamanhoString - 1)) {
                    resultado = s.slice(i, tamanhoString).length > resultado.length ? s.slice(i, tamanhoString) : resultado;
                    break;
                }
                tamanhoString--;
            }
        }
        else
            break;
    }
    return resultado.replace(/\|/g, '');
}
function compara(strin, inicio, fim) {
    if (strin[inicio] === strin[fim] && inicio < fim) {
        return compara(strin, inicio + 1, fim - 1);
    }
    else if (strin[inicio] === strin[fim] && inicio === fim) {
        return true;
    }
    else
        return false;
}
