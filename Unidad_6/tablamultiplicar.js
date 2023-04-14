    
contador = 1 // contador para la funcion longica
numero = 7 // numero el cual se realiza la multiplicacion

while(contador<= 10){ // condicion, hasta que sea falso no se saldra de la condicion
    console.log(`${numero} x ${contador} es  = ${numero * contador}`) // imprimimos el resultado y al tiempo realizomos la operacion
    contador++ //contador, para que incremente el contador y se rompa el cicl1
}
// otra frma de realizar el proceso
let j = 7 
for (let index = 1; index < 10; index++) {
    console.log(`${j} x ${index} = ${j * index}`)
}