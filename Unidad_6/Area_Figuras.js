// area de un cuadrado
let lado = 5

function are_cuadrdro(lado) {
    let area = lado**2
    return area
} 

console.log(are_cuadrdro(lado))

// area triangulo 
let base = 5
let altura = 7
function area_traungulo(base, altura) {
    let area = (base*altura) / 2
    return area
}
console.log(area_traungulo(base, altura))

// area de un circulo

let radio = 5

function area_cirulo(radio){
    const Pi = 3.1416
    let area = (Pi*radio*radio)
    return area
}

console.log(area_cirulo(radio))