/*
Cree una clase cuadrado que herede de la clase figura la cual tenga los atributos de alto y ancho.
Sobreescriba el método saludar con el siguiente mensaje:
“Hola! Soy un cuadrado. Mi color es color y mis medidas son altoxancho”
Cree una instancia de la clase cuadrado e imprímala por consola
*/
class Figura{ 
    constructor (color){
        this.color = color
    }
    saludar (){
        console.log(` Hola¡ Soy un a figura y mi color es ${this.color}`)
    }

}

class Cuadrado extends Figura{
    constructor(color, alto, ancho){
           super(color)
           this.alto = alto
           this.ancho = ancho
    }
    saludar(){
        console.log(`Hola! Soy un cuadrado. Mi color es ${this.color} color y mis medidas son ${ this.alto* this.ancho} `)
    }
}

const Objeto1 = new Cuadrado("Negro" , 5 , 5)
Objeto1.saludar()

/*
Cree una clase circulo que herede de la clase figura la cual tenga el atributo de radio. Sobreescriba
el método saludar con el siguiente mensaje:
“Hola! Soy un cuadrado. Mi color es color y mi radio es radio”
Cree una instancia de la clase circulo e imprímala por consola.
*/

class ciruculo extends Figura{
    constructor(color, radio){
        super(color)
        this.radio = radio
    }

    saludar(){
        return `Hola¡ Soy un Circulo mi color es ${this.color} y mi radio es ${this.radio} `
    }
}

let Objeto2 = new ciruculo("Amarillo", 5)
console.log(Objeto2.saludar())