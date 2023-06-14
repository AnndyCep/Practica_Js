/** Según lo anterior haga un código que:
a. Reciba los datos personales (nombre, apellido, correo, teléfono, nacionalidad) de 5
usuarios en objetos y los pase a formato JSON. Imprima tanto los objetos como los JSON
generados.
b. Reciba un JSON con información de sus 5 películas favoritas y pase esta información a
objetos. Imprima los JSON y los objetos generados. */

const usuarios = [
    { "nombre" : "Usuario",
      "apellido" : "1",
      "correo" : "upchh@example.com",
      "teléfono" : "123456789",
      "nacionalidad" : "España"
    },
    {
        "nombre" : "Usuario",
        "apellido" : "2",
        "correo" : "upchh@example.com",
        "teléfono" : "123456789",
        "nacionalidad" : "España"
    },
    {
        "nombre" : "Usuario",
        "apellido" : "3",
        "correo" : "upchh@example.com",
        "teléfono" : "123456789",
        "nacionalidad" : "España"
    },
    {
        "nombre" : "Usuario",
        "apellido" : "4",
        "correo" : "upchh@example.com",
        "teléfono" : "123456789",
        "nacionalidad" : "España"
    }
]

const usuariosJSON = JSON.stringify(usuarios); // Se una para convertir de objeto a JSON.

console.log(usuariosJSON);
console.log(usuarios);

/** Ahora para realizar el parse de Json a objeto */

const películasJSON = `{
    "peliculas": [
      {
        "titulo": "Película 1",
        "director": "Director 1",
        "año": 2020
      },
      {
        "titulo": "Película 2",
        "director": "Director 2",
        "año": 2018
      },
      {
        "titulo": "Película 3",
        "director": "Director 3",
        "año": 2018
      },
      {
        "titulo": "Película 4",
        "director": "Director 4",
        "año": 2018
      },
      {
        "titulo": "Película 5",
        "director": "Director 5",
        "año": 2018
      }
    ]
}`;

const películas = JSON.parse(películasJson); // se usa para convertir JSON a objeto