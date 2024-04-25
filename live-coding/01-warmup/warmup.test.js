const getTotalCarrosEMotos = require('./getTotalCarrosEMotos');

describe('warmup setup test', () => {
  it('Carros:21 Motos:42', () => {
    const resposta = {
      carros: 21,
      motos: 42,
    };
    const exemplo = { totalVeiculos: 63, totalPneus: 168 };
    const veiculos = getTotalCarrosEMotos(exemplo);
    expect(veiculos).toStrictEqual(resposta);
  });
  it('Carros: 56, Motos:47', () => {
    const resposta = {
      carros: 56,
      motos: 47,
    };
    const exemplo = { totalVeiculos: 103, totalPneus: 318 };
    const veiculos = getTotalCarrosEMotos(exemplo);
    expect(veiculos).toStrictEqual(resposta);
  });
  it('Carros: 0, Motos:10', () => {
    const resposta = {
      carros: 0,
      motos: 10,
    };
    const exemplo = { totalVeiculos: 10, totalPneus: 20 };
    const veiculos = getTotalCarrosEMotos(exemplo);
    expect(veiculos).toStrictEqual(resposta);
  });
  it('Carros: 100, Motos:0', () => {
    const resposta = {
      carros: 100,
      motos: 0,
    };
    const exemplo = { totalVeiculos: 100, totalPneus: 400 };
    const veiculos = getTotalCarrosEMotos(exemplo);
    expect(veiculos).toStrictEqual(resposta);
  });
  it('Carros: 100, Motos:3', () => {
    const resposta = {
      carros: 100,
      motos: 3,
    };
    const exemplo = { totalVeiculos: 103, totalPneus: 406 };
    const veiculos = getTotalCarrosEMotos(exemplo);
    expect(veiculos).toStrictEqual(resposta);
  });
});
