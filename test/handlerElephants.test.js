const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando não for passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna null quando o parâmetro não for do tipo string', () => {
    expect(handlerElephants(48)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna o id, nome, população, localização, disponibilidade ou os residentes, caso seja passado um parâmetro com essas repectivas strings', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  it('Retorna a quantidade de elefantes quando o parâmetro passado for count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna a média aritmética das idades dos elefantes quando o parâmetro passado for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Retorna uma array com os nomes dos elefantes quando o parâmetro passado for names', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });
  it('Retorna null quando a string passada como parâmetro não for um caso válido', () => {
    expect(handlerElephants('anything')).toBeNull();
  });
});
