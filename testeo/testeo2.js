const toCamelCase = (str) => {

    // Suponemos que solo recibiremos o "-" o "_" como separadores y nunca mezcla de ambos
    return str.replace(/(?<=[-_])./g, x => x.toUpperCase()).replace(/[-_]/g,'');
    
}

let palabra = toCamelCase('La-prueba_definitiva')
console.log(palabra)