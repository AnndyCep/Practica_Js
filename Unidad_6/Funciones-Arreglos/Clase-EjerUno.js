class animal{

    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
        
    saludar (){
         console.log(`hola, mi nombre es ${this.nombre}`) 
         
    }

}

const perro = new animal ("Firu", "Macho");
console.log(perro)
perro.saludar();


