class Pilha {
  items: number[];
  constructor() {
    this.items = [];
  }
  push(elemento:number) {
    this.items.push(elemento);
  }
  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
}

const novaPilha = new Pilha();
novaPilha.push(9);
novaPilha.push(5);
novaPilha.push(6);
novaPilha.push(1);

novaPilha.pop();
console.log(novaPilha.items);
