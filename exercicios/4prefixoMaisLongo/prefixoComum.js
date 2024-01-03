var palavras = ['flower', 'flow', 'flight'];
// let palavras = ['fl'];
/*
1. achar a menor palavra
2. Pegar a primeira letra e comparar com as demais palavras
3. Se for igual, salvar a letra em let prefixo e comparar a proxima
4. Se for diferente retorar o valor o prefixo montado.
*/
palavras.sort();
console.log(palavras[0]);
var prefixo = '';
var acumulador = palavras[0].length;
var menorPalavra = palavras[0].length;
palavras.forEach(function (item) {
    if (item.length < menorPalavra)
        menorPalavra = item.length;
});
console.log(palavras);
var teste = palavras.every(function (e) {
    return (e[0] === 'f');
});
console.log(teste);
