 //Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.
    // Creamos un arreglo 
    let lista = [7,8,3]
    // Se usa la funcion Sort que nos permite ordenas los numeros de mayor a menor o de menor
    // a menor con los parametros b,a o a,b 
    lista.sort(function(b,a){
        return a-b
    })

    console.log(lista)

    let  nuevo = [7,8,3]
    let mayor = nuevo[0]
    let menor = null
    let medio = null

    for (let index = 1; index < nuevo.length; index++) {
        if(nuevo[index] > mayor){
            medio = mayor
            mayor = nuevo[index]
        }if (nuevo[index] < mayor) {
            menor = nuevo[index]
        }if (menor > medio){
            menor = medio
        }
        
    }
    