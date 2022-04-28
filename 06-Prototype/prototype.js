
function Mamifero(nombre) { 

    this.nombre = nombre
    this.descendencia = []

}

Mamifero.prototype.saludar = function () {
    return "Hola, mi nombre es " + this.nombre;
}


Mamifero.prototype.nuevoHijo = function () {
    let nombreHijo = { nombre: `${this.nombre} Jr` }
    this.descendencia.push(nombreHijo)
    return nombreHijo;
}

/*-------------------------------------------------------*/

Gato.prototype = Object.create(Mamifero.prototype)

Gato.prototype.constructor = Gato;

function Gato(nombre,color) {   
    Mamifero.call(this,nombre)
    this.color = color;
} 

//la idea acá es pisar a nuevoHijo para q funcione en contexto Gato

Gato.prototype.nuevoHijo = function (color) {  
    this.nombre = `${this.nombre} Jr`
    this.color = color
    this.descendencia.push(this)
    return this;
} 


  



















