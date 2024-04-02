class HasTable {
  hash;
  constructor(value) {
    this.hash = new Array(value);
  }

  addValue(value) {
    let lengthTable = this.hash.length - 1;
    let cycles = value % lengthTable;
    while (cycles <= lengthTable && this.hash[cycles] !== undefined && this.hash[cycles] !== null) {
      cycles++;
    }
    if (cycles < lengthTable) {
      this.hash[cycles] = value;
    }
  }
  removeElement(value) {
    let lengthTable = this.hash.length - 1;
    let cycles = value % lengthTable;
    while (cycles <= lengthTable && this.hash[cycles] !== undefined && this.hash[cycles] !== null) {
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

console.log(hash);
