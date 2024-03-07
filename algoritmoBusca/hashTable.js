const hashTable = new Array(23);

function restoDivisao(element) {
  return (indice = element % 23);
}

function adicionar(element) {
  let ciclos = 0;
  let indice = restoDivisao(element);
  while (hashTable[indice] !== undefined && ciclos < hashTable.length) {
    indice = restoDivisao(indice + 1);
    ciclos++;
  }
  hashTable[indice] = element;
}
function buscar(element) {
  let ciclos = 0;
  let indice = restoDivisao(element);
  while (hashTable[indice] !== undefined) {
    ciclos++;
    if (hashTable[indice] === element) {
      console.log(`Numero de ciclos: ${ciclos}`);

      return indice;
    } else {
      indice = restoDivisao(indice + 1);
    }
  }
  return -1;
}

adicionar(15);
adicionar(1);
adicionar(23);
adicionar(57);
adicionar(4);
adicionar(590);
adicionar(674);
adicionar(711);
adicionar(20);
adicionar(9);
adicionar(10);

console.log(hashTable.toString());
console.log(buscar(57));
