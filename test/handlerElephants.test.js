const handlerElephants = require('../src/handlerElephants');

const computeData = require('../src/handlerElephants');

describe('Testes da função computeData', () => {
  it('retorno deverá ser igual a 4', () => {
    expect(computeData('count')).toEqual(4);
  });
  it('retorno deve ser um objeto com os nomes', () => {
    expect(computeData('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média', () => {
    expect(computeData('averageAge')).toBe(10.5);
  });
  it('retornar null se receber o nome de outro animal', () => {
    expect(computeData('giraffes')).toBe(null);
  });
});

describe('Testes da função handlerElephants', () => {
  it('recebe valor diferente de string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Não recebe paramentro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna o objeto do parametro', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
});
