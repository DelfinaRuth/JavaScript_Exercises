

describe('Funcion `saludar`', function() {
  // La funcion saludar la tenemos que definir nosotros en nuestro archivo test.js
  // tiene que poder superar los test planteados a continuacion.
  it('Deberia saludar', function() {
    // En este `spec` o test pedimos que al llamar a la funcion `saludar`
    // el resultado sea igual (.toEqual) al string 'Hola!', osea que retorne 'Hola!'.
    expect(saludar()).toEqual('Hola!');
  });

  it('Si recibe un parametro debería saludar a alguien', function() {
    expect(saludar('Toni')).toEqual("Hola, Toni!");
  });
});


describe('Funcion `sumar`', function(){

  var valor = 0;
  // La funcion `beforeEach` se llama una vez antes de cada unit test.
  // Los "unit tests" o "tests" empiezan con la funcion "it".
  beforeEach(function(){
    valor = 0;
  });

  it('sumando 4 y 5, deberia dar 9', function(){

    // Tambien podemos realizar acciones antes de la comparacion final
    valor += sumar(4, 5);
    expect(valor).toEqual(9);
  });

  it('sumando 7 y 8, deberia dar 15', function(){
    
    valor += sumar(7, 8);
    expect(valor).toEqual(15);
  });
})