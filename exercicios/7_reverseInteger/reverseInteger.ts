console.log(reverse(1));
function reverse(x: number): number {
  let resultado = 0;
  const limite = 2 ** 31;
  while (x !== 0) {
    resultado *= 10;
    resultado += Math.trunc(x % 10);
    x = Math.trunc(x / 10);
  }

  if (resultado < -limite || resultado > limite - 1) return 0;

  return resultado;
}
