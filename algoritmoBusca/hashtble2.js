class HasTable {
  hash;
  constructor(value) {
    this.hash = new Array(value);
  }

  addValue(value) {
    let lengthTable = this.hash.length;
    let cycles = value % lengthTable;
    while (cycles <= lengthTable - 1 && this.hash[cycles] !== undefined && this.hash[cycles] !== null) {
      cycles++;
    }
    if (cycles < lengthTable) {
      this.hash[cycles] = value;
    }
  }
  removeElement(value) {
    let lengthTable = this.hash.length;
    let cycles = value % lengthTable;
    while (cycles <= lengthTable - 1 && this.hash[cycles] !== value&& this.hash[cycles] !== undefined ) {
      cycles++;
    }
    if (this.hash[cycles] === value) {
      this.hash[cycles] = null;
    }
  }
}
const hash = new HasTable(2003);

hash.addValue(2003);
hash.addValue(0);
hash.addValue(2003);
hash.addValue(10);
hash.removeElement(2003);
hash.removeElement(2003);
console.log(hash);
