//*! Crea un archivo llamado objetos.js que contenga las siguientes líneas

//*! - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

//*! - Una variable que obtenga tu edad a partir del objeto anterior

//*! - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

//*! - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


let obj = {
    nombre: 'Agustin',
    apellido: 'Godoy',
    edad: 22,
    altura: 1.82,
    eresDesarrollador: true
}

let edad = obj.edad

let lista = [obj,

    {
        nombre: 'Rodrigo',
        apellido: 'Garcia',
        edad: 26,
        altura: 1.76,
        eresDesarrollador: true
    },
    {
        nombre: 'Santiago',
        apellido: 'Garcia',
        edad: 18,
        altura: 1.72,
        eresDesarrollador: false
    }
]

let listaOrdenada = lista.sort( (a, b) => b.edad - a.edad)
