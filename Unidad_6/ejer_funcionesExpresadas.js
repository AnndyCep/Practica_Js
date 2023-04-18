// Funcion expresada, no se puede llamar la instancia antes que la funcion
const Expesada = function (a,b){
    if(a>b){
        return 1;
    }
    if (a<b){
        return -1;
    }
    else{
        return 0;
    }
}

console.log((Expesada(5,6)))