/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number;
//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// Certamente! Abaixo está um exemplo de código TypeScript para uma lista encadeada simples, com comentários explicativos para cada parte:

// ```typescript
// Definindo a classe No que representa um nó na lista encadeada
class No<T> {
  data: T;
  next: No<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// Definindo a classe LinkedList que representa a lista encadeada
class LinkedList<T> {
  head: No<T> | null;

  constructor() {
    this.head = null;
  }

  // Método para adicionar um elemento no final da lista
  append(data: T): void {
    const newNode = new No(data);

    if (!this.head) {
      // Se a lista estiver vazia, o novo nó se torna a cabeça da lista
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      // Percorre a lista até encontrar o último nó
      current = current.next;
    }

    // Adiciona o novo nó no final da lista
    current.next = newNode;
  }

  // Método para imprimir os elementos da lista
  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Exemplo de uso da lista encadeada
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList)

// // Imprimindo os elementos da lista
// linkedList.printList();
// ```

// Este é um exemplo básico de uma lista encadeada em TypeScript. A classe `No` representa um nó na lista, e a classe `LinkedList` contém métodos para manipular a lista, como adicionar elementos no final (`append`) e imprimir a lista (`printList`). Certifique-se de entender cada parte do código e adapte conforme necessário para atender aos requisitos específicos do seu projeto.