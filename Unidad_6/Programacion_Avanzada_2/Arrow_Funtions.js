/**
 * Según lo anterior haga un código que con arrow functions haga una función comparacion(a, b)
    que a partir de dos números cumpla lo siguiente:
    a. Si el primer número es diferente que el segundo, debe devolver 1.
    b. Si el primer número es igual que el segundo, debe devolver 0
 * 
 */

   const arrowFuntion = (a, b) => a != b

   const objeto = arrowFuntion(1,1)
   console.log(objeto)

   if (objeto == true) {
        let valor = 1
        console.log(valor)

   }else{
        let valor = 0
        console.log(valor)
   }
   
   /**
    * Con arrow funtions construir las siguientes funciones:
    . Convierta segundos a minutos e imprima el mensaje:
    “Los segundos segundos son equivalentes a minutos minutos”
    b. Convierta minutos a horas e imprima el mensaje:
    “Los minutos minutos son equivalentes a horas horas”
    c. Convierta horas en días e imprima el mensaje:
    “Las horas horas son equivalentes a días días”
    * 
    * 
    * 
    */
   const segundos = (a) => {
    const conSeg = (a/60)
    return console.log(`Los segundos ${a} equivales a ${conSeg} minutos`)
   }
   const minutos = (b) => {
    const conhor = (b/60)
    return console.log(`Los minutos ${b} equivales a ${conhor} horas`)
   }
   

   const seg = segundos(5000)
   const hor = minutos(511)
   
  