const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function buscaBinariaRecursiva(lista, numero, inicio = 0, fim = lista.length - 1) {
  let meio = Math.floor((inicio + fim) / 2);
  if (inicio <= fim) {
    if (lista[meio] === numero) {
      console.log(`o ${numero} esta no indice ${meio}`);
      return meio;
    } else if (lista[meio] > numero) {
      buscaBinariaRecursiva(lista, numero, inicio, meio - 1);
    } else if (lista[meio] < numero) {
      buscaBinariaRecursiva(lista, numero, meio + 1, fim);
    }
  } else {
    console.log(`Não encontrado`);
    return -1;
  }
}

buscaBinariaRecursiva(arr, 2);
