var s = '()[]{}}';
isValid(s);
function isValid(s) {
    var parentesesAbertos = [];
    var resultado = true;
    if (s.length % 2 != 0) {
        console.log("numero incorreto de parenteses");
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        console.log(s[i - 1] + s[i]);
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            parentesesAbertos.push(s[i]);
        }
        else if (s[i - 1] + s[i] === '()') {
            console.log('fechou');
        }
        else if (s[i - 1] + s[i] === '[]') {
            console.log('fechou');
        }
        else if (s[i - 1] + s[i] === '{}') {
            console.log('fechou');
        }
        else
            resultado = false;
    }
    console.log(resultado);
    return resultado;
}
