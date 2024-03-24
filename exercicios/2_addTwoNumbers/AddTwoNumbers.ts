//  * Definition for singly-linked list.
class ListNodes {
  val: number;
  next: ListNodes | null;
  constructor(val?: number, next?: ListNodes | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function criarLista(numero: number | null, lista: ListNodes | null = null): ListNodes | null {
  if (numero === null) return null;
  if (numero && numero !== Math.floor(numero % 10)) {
    let lista = new ListNodes(Math.floor(numero % 10));
    lista.next = criarLista(Math.floor(numero / 10), lista.next);
    return lista;
  } else return (lista = new ListNodes(numero));
}
const lista1 = criarLista(342);
const lista2 = criarLista(665);
console.log(addTwoNumbers(lista1, lista2));

function addTwoNumbers(l1: ListNodes | null, l2: ListNodes | null): ListNodes | null {
  let resultado: ListNodes | null = new ListNodes();
  let current: ListNodes | null = resultado;
  let sobe = 0;

  while (l1 || l2 || sobe > 0) {
    let soma = 0;
    if (l1) {
      soma += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      soma += l2.val;
      l2 = l2.next;
    }
    soma += sobe;
    current.next = new ListNodes(Math.floor(soma % 10));
    current = current.next;

    sobe = Math.floor(soma / 10);
  }
  return resultado.next;
}
