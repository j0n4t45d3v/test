const { media } = require("../src/funcao-media");

describe('Função que tira a media de dois numeros', () => {
  it('Deve tirar a media de dois numeros',() => {
    expect(media(6,6)).toBe(6);
    expect(media(6,6)).not.toBe(5.5);
    expect(media(2,6)).toBe(4);
  })
});
