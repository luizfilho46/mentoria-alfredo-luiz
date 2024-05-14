const hashTable = new Array(1000);

function restoDivisao(element) {
  const indice = element % 1000;
  return indice;
}

function adicionar(element) {
  let indice = restoDivisao(element);
  hashTable[indice] = element;
}
function buscar(element) {
  let indice = restoDivisao(element);
  const value = hashTable[indice];
  if (value !== undefined) {
    return value;
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
adicionar(0);

console.log(hashTable.toString());
console.log(buscar(10));
