class Fila {
  items: number[];
  constructor() {
    this.items = [];
  }
  /**
   * Insere um elemento no final da lista.
   * @param {number} x Insira um valor tipo numerico
   */
  push(x: number) {
    this.items.push(x);
  }
  /**
   * Remove o primeiro elemento do inicio da lista.
   * */
  shift() {
    return this.items.shift();
  }
  /**
   * Retorna o primeiro da fila
   * */
  peek() {
    return this.items[0];
  }
  /**
   Verifica se a fila esta vazia.
   */
  isEmpty() {
    return this.items.length === 0;
  }
}

const novaFila = new Fila();
novaFila.push(9);
novaFila.push(8);
novaFila.push(8);
console.log(novaFila);
// novaFila.shift()
console.log(novaFila.isEmpty());
