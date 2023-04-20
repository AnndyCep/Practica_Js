// Los metodos son acciones que realizan los objetos, son una serie de instrucciones
// Closure 
//Los objetos son grandes variables capaces de contener otras variables, llamadas propiedades atributos, y funciones,
//lamados metodos
var constructor = function (precio) {
        var miobjeto = {
            preioBase : precio,
            iva: 1.21,
            calculariva : function () {
                console.log(this.preioBase * this.iva);
            }
        }
        return miobjeto
}

precio1 = constructor(100)
precio1.calculariva();


