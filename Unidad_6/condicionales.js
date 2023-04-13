/** Se sueelen usar para condiciones simples con la ssiguiente estruccutra */

console.log(" *******Operador Terniario *******")

let a = 1
    b = 2

/**
 * Se trata se realizar una condicion, reduciendo la cantidad de 
 * lineas de codigo que usamos
 * Condicion ? Verdadera : falsa
 */

let esMayor = (1<3) ? `${b} es mayor que ${a}` : `${a} es menor que ${b}`
console.log(esMayor)

if (a>b){
    esMayor = `${b} es mayor que ${a}`
}else{
    esMayor = `${a} es menor que ${b}`
}
console.log(esMayor)