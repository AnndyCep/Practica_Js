// Los metodos son acciones que realizan los objetos, son una serie de instrucciones

var constructor = function (precio) {
        var miobjeto = {
            preioBase : precio,
            iva: 1.21,
            calculariva : function () {
                alert(this.precioBase * this.iva);
            }
        }
        return miobjeto
}

precio = constructor(100)
precio.calculariva();