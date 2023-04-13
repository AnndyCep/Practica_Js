// Podremos encontrar el numero menor, mayor, medio.
let a = 1;
let b = 2;
let c = 3;

if (a > b && b > c) {
console.log(`${a} es el mayor, ${b} es el medio, y ${c} es el menor.`);
} else if (b > a && a > c) {
console.log(`${b} es el mayor, ${a} es el medio, y ${c} es el menor.`);
} else if (c > b && b > a) {
console.log(`${c} es el mayor, ${b} es el medio, y ${a} es el menor.`);
} else if (a > c && c > b) {
console.log(`${a} es el mayor, ${c} es el medio, y ${b} es el menor.`);
} else if (b > c && c > a) {
console.log(`${b} es el mayor, ${c} es el medio, y ${a} es el menor.`);
} else if (c > a && a > b) {
console.log(`${c} es el mayor, ${a} es el medio, y ${b} es el menor.`);
} else {
console.log("Los números son iguales.");
}