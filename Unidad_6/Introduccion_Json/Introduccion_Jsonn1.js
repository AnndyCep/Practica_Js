/**
 * Referencia = Hace referencia al lugar de memoria donde se encuentra almacenado ese objeto
 * Destructuring = Es una expresion que nos permite desempaquetar valores de arrays
 * 
 * Que es Jeison
 * Java Script Objet notacion 
 * Es un formato ligero para almacenar y trasportar datos
 * 
 */
/*
{
    "Bookstore":[
        {
            title: 2021,
            author: "Arthur",
            price: "30.0",
            year: 1968
         }
        ,{
            title: 1985,
            author: "cualquiercosa",
            price: "28,5",
            year: 1890
        }
    ]
}

/**
 * Según lo anterior haga un JSON información que contenga la siguiente información:
1. Nombre
2. Apellido
3. Edad
4. Hobbies guardados en un arreglo.
5. Objeto Contacto con la siguiente información:
1. Correo
2. Objeto Teléfono
1.Teléfono celular
2.Teléfono fijo.
3. Dirección
 *  
 */
/*
{ "Informacion" : {
    {
        "nombre": "Pepito",
        "apellido": "Camelo",
        "edad": "25",
        "hobbies ": ["Bici","Fubol"]
         "Contacto" : {
            "correo" : "JASJADJAJ@hasdad.com", 
            "telefono" : {
                "telefono celular " : 123123123,
                "telefono fijo" : 132121
            }
            "direccion" : "cr  12 #sadadad"
         }
    }    
}
}

/**
 * Realice un JSON para el siguiente planteamiento:
En una tienda se tienen productos de aseo, alimentos y bebidas. Cada producto vendido en la tienda
cuenta con las siguientes propiedades:
a. Nombre
b. Marca
c. Valor
1. Valor de compra
2. Valor de venta 
Tipo (aseo, alimento, bebida)
e. Inventario
Para los siguientes productos crear un fichero JSON que represente esta información relativa a
los productos que ofrece la tienda.
a. Arroz, Diana
b. Jabon, Ariel
c. Detergente, Suavitel
d. Gaseosa, Coca-Cola
e. Aceite, Gourmet
f. Galletas, Festival
g. Cerveza, Poker
h. Crema dental, Colgate
 */
/*
{
    {
        "nombre" : "Cerveza",
        "Marca" : "Poker",
        "valor": {
            "valor de compra" : 5000,
            "valor venta" : 10000 
        },
        "Tipo" : "Bebida",
        "inventario" : 70
    },
    { 
        "nombre" : "Aceite",
        "Marca" : "Gourtmet",
        "valor": {
            "valor de compra" : 10000,
            "valor venta" : 45000 
        },
        "Tipo" : "Bebida",
        "inventario" : 2000
    },
    { 
        "nombre" : "Galletas",
        "Marca" : "Festival",
        "valor": {
            "valor de compra" : 700,
            "valor venta" : 1500 
        },
        "Tipo" : "Bebida",
        "inventario" : 30000
    },

    }
}

 const avaraible=`{
    "nombre": "arturo",
    "apellido":"martinez",
    "edad": 89,
    "hobbies": ["tocar piano", "bailar", "ver tv", "cantar"],
    "contacto": {
        "telefono": "41646165",
        "correo": "jdasdasdasd.edu.co",
        "direccion": "cra7979s#25sur"
    }
    }`
    
    
console.log(typeof(avaraible))
*/

let aObjeto = `
{
    "productos": [
        {
            "nombre": "arroz",
            "marca": "diana",
            "valor": {
                "valor_compra": 20000,
                "valor_venta": 23000
            },
            "tipo": "alimento",
            "inventario": 10
        },
        {
            "nombre": "jabon",
            "marca": "ariel",
            "valor": {
                "valor_compra": 5452,
                "valor_venta": 6985
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "detergente",
            "marca": "suavitel",
            "valor": {
                "valor_compra": 5000,
                "valor_venta": 5300
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "Cerveza",
            "Marca": "Poker",
            "valor": {
                "valor_compra": 5000,
                "valor_venta": 10000
            },
            "Tipo": "Bebida",
            "inventario": 70
        },
        {
            "nombre": "Coca cola",
            "Marca": "PepsiXD",
            "valor": {
                "valor_compra": 3200,
                "valor_venta": 5000
            },
            "Tipo": "Bebida",
            "inventario": 80
        },
        {
            "nombre": "Aceite",
            "Marca": "Gourtmet",
            "valor": {
                "valor_compra": 10000,
                "valor_venta": 45000
            },
            "Tipo": "Bebida",
            "inventario": 2000
        },
        {
            "nombre": "Galletas",
            "Marca": "Festival",
            "valor": {
                "valor_compra": 700,
                "valor_venta": 1500
            },
            "Tipo": "Bebida",
            "inventario": 30000
        }
    ]
}
`;

let obj = JSON.parse(aObjeto);
console.log(typeof(obj))

console.log(obj);

let cocaColaName = obj.productos[0].valor.valor_compra;
console.log(cocaColaName);

let nuevDato = `
{
    "nombre": "Aceite",
    "Marca": "Gourtmet",
    "valor": {
        "valor_compra": 10000,
        "valor_venta": 45000
    },
    "Tipo": "Bebida",
    "inventario": 2000
}`

let item2 = obj.productos.push(nuevDato);
console.log(obj)
