/*
Tenga un objeto carro con las siguientes propiedades:
i.Marca.
ii.Modelo.
iii.Año.
iv.Color.
b. Agregue al objeto carro la función de descripción en la cual imprima lo siguiente:
“Hola! Mi marca es marca, soy modelo modelo año y mi color es color”
c. Imprima por consola cada una de las propiedades y funciones.

*/

const carro  = {
    marca: "Bwm",
    Modeli:"Fw",
    Ano: 2023,
    Color:"Dorado",
    corredor: {
        nombre:"Andres",
        Nacionaliad:"Colombian"
    },
    descripcion: function(){
        let msj = `Hola, Mi marca es ${this.marca} , es el modelo ${this.Modeli} año ${this.Ano} y mi color es ${this.Color}`;
        return msj
    }
}

let bmw = carro;
console.log(" la marca es "+ carro.marca)
console.log(" El modelo es "+ carro.Modeli)
console.log(" El año es "+ carro.Ano)
console.log(" El corredor es "+ carro.corredor.nombre)
console.log(carro.descripcion())