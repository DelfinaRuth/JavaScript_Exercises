//factory function 
function crearCalculadora(){ 
  let numeroTotal = 0;
  let miObjConFunciones = {
    valor : function(){return numeroTotal},
    sumar : function(n){return numeroTotal += n},
    restar : function(n){return numeroTotal -= n},
    reset : function(){return numeroTotal = 0}
  };
  return miObjConFunciones;
}

//refactorizado
/*const crearCalculadora = () => { 
  let numeroTotal = 0;
  return {
    valor : function(){return numeroTotal},
    sumar : function(n){return numeroTotal += n},
    restar : function(n){return numeroTotal -= n},
    reset : function(){return numeroTotal = 0}
  };
}*/



