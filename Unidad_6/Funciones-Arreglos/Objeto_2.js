/*
Según lo anterior haga un código que tenga la clase figura la cual:
a. Tenga un constructor con el atributo de color.
b. Tenga un método saludar e imprima en consola:
“Hola! Soy una figura y mi color es color”
c. Cree una instancia de la clase e imprímala por consola.

*/
class figura{
    constructor (color){
        this.color = color
    }

    
    saludar (){
        console.log(` Hola¡ Soy un a figura y mi color es ${this.color}`)
    }
}

const Fig1 = new figura("rojo");
Fig1.saludar()

