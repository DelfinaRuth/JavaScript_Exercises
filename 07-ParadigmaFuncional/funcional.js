
function duplicar(num) {
    return num * 2;
}

function map(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr;
}

function filter(arr, fn) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

/*-------------------------------------------*/

function contains(obj, num) {
    if (Array.isArray(obj) === true) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i] === num) {
                return true
            }
        }
    } else {
        for (var i in obj) {
            if (obj[i] === num) {
                return true
            }
        }
    }
    return false
}

/*-------------------------------------------*/

function cuentaPalabras(string) {
    let espacios = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            espacios += 1
        }
    }
    return espacios + 1;
}

/*-----------------------------------------------------------*/

function reduce(arr, valorInicial, fn) {

    let total = valorInicial;
    for (let i = 0; i < arr.length; i++) {
        total = fn(arr[i],total)
    }
    return total;
}

function cuentaPalabras(string) {
    let contador = 0; //cuántas palabras son 
    let arr = string.split(" ")

    for (let i = 0; i < arr.length; i++) {
        contador += 1
    }
    return contador;
}

function cuentaPalabrasReduce(indice, total) { 
    total += cuentaPalabras(indice)
    return total;
}

function suma(arr) {
    let suma = function (a, b) { return a + b; }
    return reduce(arr, 0, suma);
}

/*-----------------------------------------------------------*/

function every(arreglo, fn) {

    let queEs = [];
    for (let i = 0; i < arreglo.length; i++) {
        queEs.push(arreglo[i])
        if (reduce(queEs, 0, fn) === false) {
            return false;
        }
        queEs.pop(arreglo[i])
    }
    return true;
}

/*-----------------------------------------------------------*/

function any(arreglo, fn) { 

    let queEs = [];
    for (let i = 0; i < arreglo.length; i++) {
        queEs.push(arreglo[i])
        if (reduce(queEs, 0, fn) === true) {
            return true;
        }
        queEs.pop(arreglo[i])
    } 
    return false;
    
}















