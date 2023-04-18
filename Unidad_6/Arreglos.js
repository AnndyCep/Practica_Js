// Modificar el valor del arreglo coches[1] = "Mercedez" 
// Enviar informacion al erreglo funcion push eje  coches.push("Nuevo");
// Crear un areglo var coches =[ "Posicion 0","Posicion 1" ...]
// recorres el arreglo, se realizara desde el ciclo for
// aliminar el ultimo elempento pop()
// eliminar el primer elempento shift()
// clornar un arreglo slice()
//  Eliminar un elemento apartir de una posicion splice(pos, "Qui ingresar el numero de posicion")


//ejemplo

var coches = ["Bmww","Mercedez","Mazda"]
console.log(coches);

// recorres el areglo con el ciclo for

for (let contador= 0; contador< coches.length; contador++) {
    console.log(`${contador} : ${coches[contador]} `) // forma de imprimir y recorrer
    console.log( contador + " : " + coches[contador]) // forma de imprimir y recorrer
}
coches.push("Chevrelet") // se agrega nuevo elemento al arreglo
console.log(coches)

// ejemplo del taller de arreglos

var peluclas = [" La milla verde", "Paracitos", "El viaje de Chihuro", "Coco", "Interetelar"]

for (let index = 0; index < peluclas.length; index++) {
    console.log(` la pelicula ${index+1} :es ${peluclas[index]}`)    
}
 // con foreach
 peluclas.forEach((e , index) => console.log(`peliculas :${index} ${e}`))
