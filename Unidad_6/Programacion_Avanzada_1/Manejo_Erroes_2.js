/**
 * Realice un código que realice una calculadora científica con las siguientes operaciones:
a. Suma
b. Resta
c. Multiplicación
d. División.
e. Potencia.
f. Raíz cuadrada.
Que tenga manejos de errores para las operaciones teniendo en cuenta que:
-La división por cero no es posible.
-La calculadora solo acepta entradas numéricas.
 * 
 */

class calculadora{
    
    
    suma (num1,num2){
        try {
            let suma = (num1 + num2)
            if (isNaN(suma)) {
                throw new Error(" El numero ingresado no es valido")
            }else{
                return suma
            }
        } catch (error) {
            console.log(" Se ´rodujo un error, Referencia: " + error)
        }
    }
    resta (num1,num2){
        try {
            let resta = (num1 - num2)
            if (isNaN(resta)) {
                throw new Error("El numero ingresado no es valido")
            }else{
                return resta
            }
        } catch (error) {
            console.log(" Se produjo un error, Referencia: " + error)
        }
    }
    multiplicacion (num1,num2){
        try {
            let multi = (num1 * num2)
            if (isNaN(multi)) {
                throw new Error("El numero ingresado no es valido")
            }else{
                return multi
            }
        } catch (error) {
            console.log(" Se produjo un error, Referencia: " + error)
        }
    }
    division (num1,num2){
        try {
            let div = (num1 / num2)
            if (isNaN(div) || div <= 0) {
                throw new Error("El numero ingresado no es valido")
            }else{
                return div
            }
        } catch (error) {
            console.log(" Se produjo un error, Referencia: " + error)
        }
    }
    potencia  (num1,num2){
        try {
            let potencia = (num1 ** num2)
            if (isNaN(potencia)) {
                throw new Error("El numero ingresado no es valido")
            }else{
                return potencia
            }
        } catch (error) {
            console.log(" Se produjo un error, Referencia: " + error)
        }
    }

    raiz (num1){
        try {
            let raiz = Math.sqrt(num1)
            if (isNaN(raiz) || num1 <= 0) {
                throw new Error("El numero ingresado no es valido")
            }else{
                return raiz
            }
        } catch (error) {
            console.log(" Se produjo un error, Referencia: " + error)
        }
    }

}

let obj = new calculadora();
console.log(obj.suma(2,3))
console.log(obj.resta(2,5))
console.log(obj.multiplicacion(3,2))