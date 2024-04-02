class ListaEncadeada<T> {
  private item: T | null;
  private proximo: ListaEncadeada<T> | null;
  constructor(valor: T) {
    this.item = valor === undefined ? null : valor;
    this.proximo = null;
  }

  push(valor: T) {
    if (!this.proximo) {
      this.proximo = new ListaEncadeada(valor);
    } else {
      let current: null | ListaEncadeada<T> = this.proximo;
      while (current?.proximo) {
        current = current.proximo;
      }

      current.proximo = new ListaEncadeada(valor);
    }
  }
  [Symbol.iterator](): Iterator<T> {
    let itemValor = this.item;
    let current = this.proximo;
    return {
      next: (): IteratorResult<T> => {
        if (itemValor) {
          let value = itemValor;
          if (current) {
            itemValor = current.item;
            current = current?.proximo;
          } else itemValor = null;
          return { value, done: false };
        }
        return { value: null, done: true };
      },
    };
  }
}
let lista = new ListaEncadeada<Number>(1);
lista.push(20);
lista.push(200);
lista.push(25);
console.log(...lista);
for (const item of lista) {
  console.log(item);
}
