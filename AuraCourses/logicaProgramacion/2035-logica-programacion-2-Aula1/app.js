


function llamarElementos(element, texto) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = texto
    return;
}

function promedio(num1,num2,num3) {
    let promedio = (num1 + num2 + num3) / 3;
    return promedio;
}
function numeroMayor(num1,num2) {
        
    let mayor = (num1 > num2) ? " Es mayor el numero " +  num1 : " El numero " + num2 + " es nemor "; 
    return mayor;
}
function valorIngresado() {
    let valor = parseInt(document.getElementById("valorUsuario").value);
    //indiceIMC(valor)
    llamarElementos("p","Ingrese el numero para confirmar el factorial")
    factorialNumero(valor);

    return;
}

function factorialNumero(numero) {
    let resultado = 1;
    for (let index = 1; index <= numero; index++) {
        resultado = resultado * index;
    }
    llamarElementos("p",`El factorial de ${numero} es: ${resultado}`);
    return;

}

function indiceIMC(valor) {
    let resultado =  valor / ( 1,70 * 1,70 );
    llamarElementos("p",`El IMC de la persona es ${resultado}`);
    return;
}

llamarElementos("h1","bienvenido al mundo dev");
console.log(promedio(2,5,5));
console.log(numeroMayor(2,5));
console.log(valorIngresado());

let listaNumeros = [1,2,3,4,5,8];
console.log(listaNumeros);
console.log(listaNumeros.reverse());
console.log(promedioLista(listaNumeros));

function promedioLista(listaNumeros) { 
    let suma = 0;
    listaNumeros.forEach(element => suma += element);
    let promedio = suma / listaNumeros.length;
    return promedio;
}
