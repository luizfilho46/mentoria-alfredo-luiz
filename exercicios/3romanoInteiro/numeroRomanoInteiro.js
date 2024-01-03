let s = 'MCMXCIV';
romanToInt(s)

function romanToInt(s /* : string */) /* : number */ {
  let arrayNumeroInteiro = criaArrayNumerosInteiros(s);
  let numero = converteParaNumero(arrayNumeroInteiro);
  console.log(numero);

  return numero;

  function criaArrayNumerosInteiros(numeroRomano) {
    let inteiros = [];
    for (let index = 0; index < numeroRomano.length; index++) {
      switch (numeroRomano[index]) {
        case 'I':
          inteiros.push(1);
          break;
        case 'V':
          inteiros.push(5);
          break;
        case 'X':
          inteiros.push(10);
          break;
        case 'L':
          inteiros.push(50);
          break;
        case 'C':
          inteiros.push(100);
          break;
        case 'D':
          inteiros.push(500);
          break;
        case 'M':
          inteiros.push(1000);
          break;

        default:
          console.log('Erro: Numero inexistente');
          return;
      }
    }
    return inteiros;
  }

  function converteParaNumero(inteiros) {
    let resultado = 0;
    for (let index = 0; index < inteiros.length; index++) {
      if (inteiros[index] < inteiros[index + 1]) {
        resultado += inteiros[index + 1] - inteiros[index];
        index += 1;
      } else resultado += inteiros[index];
    }
    return resultado;
  }
}
