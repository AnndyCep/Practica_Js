/**
*   Según lo anterior haga un código reciba números con manejo de errores. Si el valor ingresado
    no es numérico debe enviar el mensaje:
    “¡Cuidado! No se reciben datos no numéricos.”
    Siempre al finalizar de ejecutar el código debe mostrar el mensaje:
    “Análisis de datos terminado.”
 * 
 * 
 */

     try {
        let suma = 5 +5  // Se gestiona la suma y se guarda dentro de la variable
        console.log(`la suma es ${resultado}`) // Resultado no esta definido, por eso salta el error

     } catch (e) { // Se captura el error para tratar, e interactuar como es posiblo solucionarlo
        console.log("Se produjo un error, referencia" + e)
     } 


     //isNaN(Parametro) determina si el parametro enviado No es un numero,
     // Ejemplo
     /**
      * let numeroUsuario = 1
      * if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuarui > 9 ){
      *     Is true se realiza las condiion a determinar
      * }
      */

     try{
        let numeroUsuario = "a"
     
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9)  {
            throw new Error(" Numero que ingresas no valido")
        }else{
            console.log("Sin errores")
        }
    } catch(e) {
        console.log("Se produjo un error, Referencias: "+e)
     }
    
     