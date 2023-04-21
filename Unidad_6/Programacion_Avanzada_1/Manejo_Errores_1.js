/**
*   Según lo anterior haga un código reciba números con manejo de errores. Si el valor ingresado
    no es numérico debe enviar el mensaje:
    “¡Cuidado! No se reciben datos no numéricos.”
    Siempre al finalizar de ejecutar el código debe mostrar el mensaje:
    “Análisis de datos terminado.”
 * 
 * 
 */

    function suma(a,b){
        
        try {
            let suma = (a + b)
            return suma 
        } catch (error) {
             console.log("¡Cuidado! No se reciben datos no numéricos.")
        } finally{
            console.log("Análisis de datos terminado.")
        }
        
     }

     let restas = suma(1,3)
     console.log(restas)