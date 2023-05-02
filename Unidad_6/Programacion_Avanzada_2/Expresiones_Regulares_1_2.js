/*
Por medio de expresiones regulares determine si una cadena de texto dada es un correo
teniendo en cuenta las siguientes condiciones:
a. Debe tener @
b. Debe tener .com

*/

function validEmail(){

    const correo = "david.montiel@hotmail.com";
    
    let validarEmail = /^\w([._-]?\w)+@\w+(.com)$/;
    
    
    if(validarEmail.test(correo)){
    console.log("El correo es correcto");
    return true;
    }
    else{
    console.log("Correo incorrecto");
    return false;
    }
    
    };