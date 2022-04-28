
function setPropsOnObj(objeto){
    
    objeto.p = 5
    objeto.plataforma = 5
    objeto.proximo = numero => numero + 1
    objeto.la = {
            clave : {
                secreta: {
                    es : 404
                }
            }
        }
}

/*------------------------------------------*/

function setPropsOnArr(array){

array.hola = function(){return "Hola!"}
array.river = "plate"
array[0] = 5
array.doble = numero => numero * 2

}

/*------------------------------------------*/

function setPropsOnFunc(parametro){
    parametro()
    parametro.year = 2022
    parametro.mitad = n => n / 2
    parametro.prototype.helloWorld = function(){return "Hello World"};

}



















