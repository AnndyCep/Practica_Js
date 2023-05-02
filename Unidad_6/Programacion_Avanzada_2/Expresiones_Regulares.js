/*
Una expresion regular (regex / regular exprexion )es una secuencia de caracteres que confirma un patro de busqueda

*/


var miExpresionRegular = /^[A-C]\w+\ses\s\w+/
// todas las cadenas que inicien por una (a) seguida de una (s). finalizando con una a

//
let msj = "a^[A-C]\w+\ses\s\w+"
let cadena = ["Juan es guapo","Adriano no es feo","Adriano deja de ser guapo","Adriano ya es guapo","No es hora","Ahora es no","Adriano es guapo"]

for (i of cadena){
    sal = `contiene ${i} el patron ${cadena} : ${miExpresionRegular.test(i)}`
    console.log(sal)
}

/*
Other way to do it 
*/

function correo(email) {
    const regex = /[a-z]+@[a-z]+\.[a-z]{2,5}$/;
    
    return regex.test(email) ? "es un correo" : "no es un correo";
    }
    
    
    
    console.log(correo("davidmontiel@hotmail.com"));

