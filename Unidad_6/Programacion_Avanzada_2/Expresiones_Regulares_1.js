/*
Según lo anterior haga un código que busque dentro del arreglo [edificio, perla, estrella, pescado,
salero, biblioteca, guitarra, dinero, música] las palabras que cumpla la siguiente condicion:
a. Que empiece por la letra A.
Para las palabras que empiezan por el nombre a se debe imprimir el siguiente mensaje:
“La palabra palabra es un sustantivo femenino”
Para el resto de palabras debe imprimir el mensaje:
“La palabra palabra es un sustantivo masculino”

*/


const palabrasSustativos = ["edificio", "perla", "estrella", "pescado", "salero", "biblioteca", "guitarra", "dinero", "música"];

palabrasSustativos.forEach(function(palabra){

let condicion = /^(\w).+(a)$/;

if(condicion.test(palabra)){
console.log(`La palabra: *${palabra}* es un sustantivo femenino`);
return true;
}
else{
console.log(`La palabra: *${palabra}* es un sustantivo masculino`);
return false;
}
});

/*
Other way to do it
*/

const obj = ["edificio", "perla", "estrella", "pescado", "salero", "biblioteca", "guitarra", "dinero", "musica"];

let expr = /a$/;

for(let i of obj){
console.log(`${i} ${expr.test(i)}`)
}