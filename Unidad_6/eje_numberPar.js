    // Funcion anonimas annimas autoeejecutables
    // Nos permite saber que nuemero es positivo par
    ( function (num){
        if (num > 0){
            if (num %2 == 0){
                console.log(num + " El numero es par");
            }else{
                console.log(num + " No es par")
            
        }
        }else{
            console.log(num + " No es positivo")
        }
    }
    )(-2)