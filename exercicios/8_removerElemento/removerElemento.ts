let num = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

removeElement(num, val);
function removeElement(nums: number[], val: number): number {
  remove(nums, 0, val);
  return nums.length
}
function remove(numero: number[], inicio: number, val: number) {
  if (numero[inicio] === val) {
    numero.splice(inicio, 1);
    remove(numero, inicio, val);
  } else if (inicio < numero.length) {
    remove(numero, inicio + 1, val);
  }
}
