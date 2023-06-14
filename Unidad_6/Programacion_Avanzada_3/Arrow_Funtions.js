/**
 * Según lo anterior haga un código que con arrow functions haga una función comparacion(a, b)
que a partir de dos números cumpla lo siguiente:
a. Si el primer número es diferente que el segundo, debe devolver 1.
b. Si el primer número es igual que el segundo, debe devolver 0.
 * 
 */

const comparacion = (a ,b ) =>{
    if (a != b){
        return 1;
    } else {
        return 0;
    }
}

console.log(comparacion(1,2));
console.log(comparacion(7,7));
