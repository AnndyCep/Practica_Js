/*Realice un código que resuelva el siguiente planeamiento:
a. Una tienda comenzó una oferta para ventas al
i.20% Para compras mayores a 10 docenas.
ii.15% Para compras mayores o iguales a 5 docenas.
iii.10% Para compras mayores a 1 docena.
Se desea determinar cuál es descuento dado una cantidad de decenas que se van a
comprar. Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000*/

let cantidadDecenas = 7
let valorDocena = 60000;
let valorCompra = valorDocena * cantidadDecenas;
let descuento = 0;

if (cantidadDecenas >= 10) {
descuento = valorCompra * 0.2;
} else if (cantidadDecenas >= 5) {
descuento = valorCompra * 0.15;
} else if (cantidadDecenas >= 1) {
descuento = valorCompra * 0.1;
}

let valorFinal = valorCompra - descuento;

console.log(`Cantidad de decenas: ${cantidadDecenas}`);
console.log(`Valor de cada docena: $${valorDocena}`);
console.log(`Valor de la compra: $${valorCompra}`);
console.log(`Descuento aplicado: $${descuento}`);
console.log(`Valor final de la compra: $${valorFinal}`);
