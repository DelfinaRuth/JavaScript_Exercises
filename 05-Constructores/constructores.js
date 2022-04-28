
function CalculadoraNPI() {

    this.numeros = [];
    this.agregar = function(num) {
        this.numeros.push(num)
    }

    this.multiplicar = function () {
        if (this.numeros < 2) {
            throw "La calculadoraNPI necesita por lo menos 2 números"
        } else {
            let num1 = this.numeros.pop()
            let num2 = this.numeros.pop()
            this.numeros.push(num2 * num1)
        }
    }
}


CalculadoraNPI.prototype.sumar = function () {
    if (this.numeros < 2) {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    } else {
        let num1 = this.numeros.pop()
        let num2 = this.numeros.pop()
        this.numeros.push(num1 + num2)
    }
}

CalculadoraNPI.prototype.valor = function (){return this.numeros[this.numeros.length - 1];}


CalculadoraNPI.prototype.restar = function () {
    if (this.numeros < 2) {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    } else {
        let num1 = this.numeros.pop() //3
        //[2]
        let num2 = this.numeros.pop() //2
        //[]
        this.numeros.push(num2 - num1)
        //[-1]
    }

}

CalculadoraNPI.prototype.dividir = function () {
    if (this.numeros < 2) {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    } else {
        let num1 = this.numeros.pop() //3
        //[2]
        let num2 = this.numeros.pop() //2
        //[]
        this.numeros.push(num2 / num1)
    }
}