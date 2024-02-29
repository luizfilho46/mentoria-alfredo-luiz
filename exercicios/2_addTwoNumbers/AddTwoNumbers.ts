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
function addTwoNumbers(l1: ListNodes | null, l2: ListNodes | null): ListNodes | null {
  let resultado: ListNodes | null = null;
  let sobe = 0;
  let current: ListNodes | null = null;

  if (l1 && l2) {
    let soma = l1.val + l2.val;
    resultado = new ListNodes(Math.floor(soma % 10));
    l1 = l1.next;
    l2 = l2.next;
    if (soma >= 10) {
      sobe = Math.floor(soma / 10);
    } else resultado = new ListNodes(Math.floor(soma % 10));

    current = resultado;

    while (l1 || l2) {
      soma = 0;
      if (l1) {
        soma += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        soma += l2.val;
        l2 = l2.next;
      }
      soma += sobe;
      let nv = new ListNodes(Math.floor(soma % 10));
      current.next = nv;
      current = current?.next;

      if (soma >= 10) {
        sobe = Math.floor(soma / 10);
      } else sobe = 0;
    }
    if (sobe > 0) {
      let nv = new ListNodes(Math.floor(sobe));
      current.next = nv;
    }
  }

  return resultado;
}
