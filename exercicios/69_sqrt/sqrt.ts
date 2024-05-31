function mySqrt(x: number): number {
  let response: number = 0;
  let valorInicial: number = 0;
  while (valorInicial * valorInicial <= x) {
    response = valorInicial;
    valorInicial++;
  }
  return response;
}