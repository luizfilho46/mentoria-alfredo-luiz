class Hash<Number> {
  hash: number[];
  constructor(value: number) {
    this.hash = new Array(value);
  }
}

const hash = new Hash<number>(2003);

console.log(hash)
