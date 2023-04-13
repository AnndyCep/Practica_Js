/**Switch case 
 * Es una estruccura de control condicional que segun una experesion evalua distintos 
 *  posibles casos
 * Su sintaxis es:
 * switch (expresion){
 *      Casse valor 1:
 *          //instruccion
 *             Break;
 *      case valor2:
 *          //instruccion 2
 *          break;
 *      default:
 *          //instruccion si nungun caso se cumple
 *          break;
 * }
 */

/*El ssiguiente caso devuleve un dia dependiente un dumero dado
0 dimingo
1 lunes 
2 martes
3 miercoles
4 jueves
5 vieernes
6 sabado*/

let mun=1;

switch(mun){
    case 0:
        console.log("dimingo")
        break;
    case 1:
        console.log("lunes")
        break;
    case 2:
        console.log("martes")
        break;
    case 3:
        console.log("miercoles")
        break;
    case 4:
        console.log("jueves")
        break;
    case 5:
        console.log("vieernes")
        break;
    case 6:
        console.log("sabado")
        break;
    default:
        console.log("No ingresaste de froma correcta")
        break;
}

