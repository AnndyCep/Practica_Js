class animal {
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    Saludar(){
        let saludo = `Hola soy un animal, mi nombre es ${this.nombre}`;
        return saludo;
    }
}

class Gato extends animal{
    constructor (nombre, genero, color ){
        super(nombre,genero)
        this.color = color
    }
    saludarGato (){
        let saludo = `Hola soy un Gato, mi nombre es ${this.nombre}`
        return saludo
    }
}

const milla = new Gato ("Milla", "Macho", "Cafecito")
console.log(milla);
console.log(milla.saludar());

