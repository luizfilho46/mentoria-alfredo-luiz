// {
//   carros: 21,
//   motos: 42
// }
// getTotalCarrosEMotos({ totalVeiculos: 63, totalPneus: 168 })
// carros = totalVeiculos - motos
// motos = (totalPneus - 4*carros)/2
// solucao
/* 
let motos, carros;
let numeroVeiculos;
let numeroPneus;

numeroVeiculos = motos + carros;
numeroPneus = 2 * motos + 4 * carros;
// isolando motos
motos = numeroVeiculos - carros;
// substituindo na equacao
numeroPneus = 2 * (numeroVeiculos - carros) + 4 * carros;
numeroPneus = 2 * numeroVeiculos - 2 * carros + 4 * carros;
numeroPneus = 2 * numeroVeiculos + 2 * carros;
carros = (numeroPneus - 2 * numeroVeiculos) / 2;
motos = numeroVeiculos - carros;

*/
const veiculos = { totalVeiculos: 63, totalPneus: 168 };
const getTotalCarrosEMotos = (veiculos) => {
  const carros = (veiculos.totalPneus - 2 * veiculos.totalVeiculos) / 2;
  const motos = veiculos.totalVeiculos - carros;
  return {
    carros: carros,
    motos: motos,
  };
};

module.exports = getTotalCarrosEMotos;
 