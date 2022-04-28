
function concatenar(){
    let st = ""
    for(let i = 0; i < arguments.length; i++){
        st += arguments[i]
    }
    return st;
}

/*----------------------------------------------------*/

function invocarFunciones(){

    let string = ""
    for(let i = 0; i < arguments.length; i++){
        string += arguments[i]()
    }
    return string;
} 


function invocarFunciones() {
    let parametros = [];
    for (const key in arguments) {
      parametros.push(arguments[key]());
    }
    return parametros.join("");
  } 


/*----------------------------------------------------*/

function creadorDeIncrementos(numero){
    return function (argumento){return numero + argumento;}
}

/*----------------------------------------------------*/

function invocacionUnica(fn){

    let num = 0;
    return function () {
        if(num <  1){
            num = fn()
        }
    }  
} 

/*----------------------------------------------------*/

const objetoConClousure = () => {
    let string = "function";
    let total = 0;

    return {
        incremento : function(){console.log(string);return total += 1;},
        incrementoPor10 : function(){console.log(string); return total += 10;},
        pedirValor : function(){console.log(string); return total;},
        cambiarValor : function(parametro){console.log(string); return total = parametro;}
    }   
}

/*------------------------------------------------------*/

function ListaDeFuncionesInvitados(arreglo, codigo){
    
    for(let i=0; i < arreglo.length; i++){
        let indice = arreglo[i] 
       
        arreglo[i] = function(n){
            if(n === codigo){
                return indice;
            } else {
                return "código secreto: invalido";
            }
        }  
    }     
    return arreglo;
}   

const armarListaDeInvitados = (arreglo,codigo) => {    
    let arregloFinal = [];

    for(let i=0; i < arreglo.length; i++){
        arregloFinal.push(arreglo[i](codigo))
    }
    return arregloFinal;
}
    
/*------------------------------------------------------*/




















