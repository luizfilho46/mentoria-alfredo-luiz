function fatorial(params) {
  if (params !== 0) return params * fatorial(params - 1);
  else return 1;
}

console.log(fatorial(4));
