/*
Según lo anterior haga un código que realice una clase Persona la cual tenga un constructor con
los atributos nombre, apellido, edad y nacionalidad, inicializarlos todos en null.
Por medio de setter asignarle valor a los atributos y obtenerlos con getter e imprimirlos por consola.
Cree un método estático que imprima por consola el siguiente mensaje:
“Hay 8.010.359.063 personas en el mundo”
*/

class Persona{
    constructor(nombre, apellido,edad, nacionalidad){
        this.nombre = null
        this.apellido = null
        this.edad = null
        this.nacionalidad = null
    }

    get getNombre() {
            return this.nombre;
        }
        get getApellido() {
            return this.apellido;
        }
        
        get getEdad() {
            return this.edad;
        }
        
        get getNacionalidad() {
            return this.nacionalidad;
        }
        
        set setNombre(nombre) {
            this.nombre = nombre;
        }
        set setApellido(apellido) {
            this.apellido = apellido;
        }
        set setEdad(edad) {
            this.edad = edad;
        }
        
        set setNacionalidad(nacionalidad) {
            this.nacionalidad = nacionalidad;
        }

    static mensaje(){
        return `Hay 8.010.359.063 personas en el mundo`
    }
}
let Andres = new Persona("Andres","Cepeda", 26 ,"Colombiana");
Andres.setNacionalidad = "Colombiana"

console.log(Andres.getNacionalidad)
//Andres.mensaje();



