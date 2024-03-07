class Node {
  constructor(element) {
    this.value = element;
    this.next = undefined;
  }
}

class Lista {
  constructor() {
    this.head = undefined;
    this.count = 0;
  }
  /**
   * Insere um elemento no final da lista
   * @param {number} element
   */
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  /**
   * Exibe o valor do elemento referente ao indice informado
   * @param {number} position indice da lista
   * @returns object ou undefined
   */
  getElementAt(position) {
    if (position >= 0 && position <= this.count) {
      let node = this.head;
      for (let i = 0; i < position && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  /**
   * Insere um elemento em qualquer posicao da lista
   * @param {number} element elemento que deseja inserir na lista
   * @param {number} position posicao da lista onde deseja inserir o elemento
   * @returns boolean
   */
  insertAt(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      if (position === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(position - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  /**
   * Remove um elemento da lista
   * @param {number} position indice do elemento que deseja remover
   * @returns boolean
   */
  removeAt(position) {
    if (position >= 0 && position <= this.count) {
      const current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(position - 1);
        const current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return true;
    }
    return false;
  }
  /**
   * Retorna o indice da primeira ocorrencia do elemento
   * @param {number} element elemento que deseja saber o indice
   * @returns number
   */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (current.value == element) {
        return i;
      } else {
        current = current.next;
      }
    }
    return -1;
  }
  /**
   * Verifica se a lista esta vazia.
   * @returns boolean
   */
  isEmpty() {
    return this.count === 0 ? true : false;
  }
  /**
   * Retorna o tamanho da lista
   * @returns number
   */
  size() {
    return this.count;
  }
}

const lista = new Lista();

export default Lista;
lista.push(15);
lista.push(25);
// console.log(JSON.stringify(lista, null, 2));
// lista.insertAt(9, 1);
// lista.removeAt(0);
lista.push(20);
console.log(JSON.stringify(lista, null, 2));
console.log(lista.count);
