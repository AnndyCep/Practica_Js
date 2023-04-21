   // Se renombran los datos del arreglo

   let dias_semana = [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
        ];
        const [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] =  dias_semana
        console.log([diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete]);

        /**
         * Según lo anterior haga un código que tenga un arreglo de 5 posiciones en donde guarde las
            siguientes películas.
            a. La milla verde
            b. Parásitos
            c. El viaje de Chihiro
            d. Coco
            e. Interstellar
            Con un ciclo recorralo e imprimalo en pantalla con el siguiente mensaje:
            “Película #posicion+1: nombrePelicula
         */

    let peliculas = [
        "La milla Verde",
        "Parasitos",
        "El viaje de Chijiro",
        "Coco",
        "Interstellar"
    ]

    for (let index = 0; index < peliculas.length; index++) {
        console.log(`Pelicula ${index + 1} : El nombre es ${peliculas[index]}`)  
    }



    /*
    Según lo anterior haga un código que por medio de un ciclo llene un arreglo con los números
    el 1 al 100 en imprimalo en pantalla
    */ 
    let Pares =[]
    let Vacio =[]
    // Se crea un arreglo vacio para almacenas los datos
    for (let index = 1; index <= 100 ; index++) {
         Vacio.push(index) // Usamos la funcion push para añadir la pposcion al arreglo
    }
    //Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla

    for (let valor = 0; valor <= Vacio.length; valor++) {
        if (valor % 2 == 0 ){
            Pares.push(valor)
            // Pares[i] = i;
        }   
    }
    console.log(Vacio)
    console.log(Pares)
    //Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.
    // Creamos un arreglo 
    let lista = [7,8,3]
    lista.sort(function(b,a){
        return a-b
    })

    console.log(lista)
    

    