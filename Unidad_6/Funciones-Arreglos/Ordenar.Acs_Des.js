 //Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.
    // Creamos un arreglo 
    let lista = [7,8,3]
    // Se usa la funcion Sort que nos permite ordenas los numeros de mayor a menor o de menor
    // a menor con los parametros b,a o a,b 
    lista.sort(function(b,a){
        return a-b
    })

    console.log(lista)

 /////

    function ordenarArreglo(arr) {

        let n = arr.length; //3

        for(let i = 0; i < n; i++) { //1
          for(let j = 0; j < n - i - 1; j++) { // j = 2 < n = 2 true
                   //6 > 2  true
            if(arr[j] > arr[j + 1]) {
                    //6     
              let temp = arr[j];
                //2       
              arr[j] = arr[j + 1];
                    //6
              arr[j + 1] = temp;
              
            }
          }
        }
        return arr;
      }
                    //0 - 1 - 2    
      let numeros = [10, 6, 2,3,4,5,3,3];
      let numerosOrdenados = ordenarArreglo(numeros);
      
      console.log(numerosOrdenados);



    

