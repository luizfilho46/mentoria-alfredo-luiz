class Hash<Number> {
  private hash: number[];
  private tamanho: number;
  constructor(value: number) {
    this.hash = new Array(value);
    this.tamanho = value;
  }
  adiconar(value: number) {
    const indice = value % this.tamanho;
    this.hash[indice] = value;
  }
  buscar(value: number) {
    const indice = value % this.tamanho;
    return this.hash[indice];
  }
}

const hash = new Hash<number>(2003);
hash.adiconar(10);
console.log(hash.buscar(10));
