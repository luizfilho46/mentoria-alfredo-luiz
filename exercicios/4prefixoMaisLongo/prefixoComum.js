var palavras = ['flower', 'flow', 'flight'];
longestCommonPrefix(palavras);
function longestCommonPrefix(strs) {
    var prefixo = '';
    var menorPalavra = strs[0].length;
    strs.forEach(function (item) {
        if (item.length < menorPalavra)
            menorPalavra = item.length;
    });
    var _loop_1 = function (i) {
        if (strs.every(function (element) { return element[i] === strs[0][i]; })) {
            prefixo += strs[0][i];
        }
        else {
            return "break";
        }
    };
    for (var i = 0; i < menorPalavra; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    console.log(prefixo);
    return prefixo;
}
