let texto: string = 'MCMXCIV';
romanToInt(texto);

function romanToInt(s: string): number {
  return converteParaNumero(criaArrayNumerosInteiros(s));

  function criaArrayNumerosInteiros(numeroRomano: string): number[] {
    let inteiros = [];
    for (let i = 0; i < numeroRomano.length; i++) {
      switch (numeroRomano[i]) {
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
          return [];
      }
    }
    return inteiros;
  }

  function converteParaNumero(inteiros: number[]) {
    let resultado = 0;
    for (let i = 0; i < inteiros.length; i++) {
      if (inteiros[i] < inteiros[i + 1]) {
        resultado += inteiros[i + 1] - inteiros[i];
        i += 1;
      } else resultado += inteiros[i];
    }
    return resultado;
  }
}
