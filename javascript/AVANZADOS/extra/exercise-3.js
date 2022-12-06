// En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

// ? ¿9 a's en el array? Deben faltar animales

const animals = [
    "Rintintín",
    "Cosmo",
    "Gato con botas",
    "Asno",
];



const cuentaLetras = (lista,letra) => {
    let contador = 0
    for (elemento of lista)
        for (letra of elemento)
            if(letra.toLowerCase() === 'a')
                contador++

    return contador
}

console.log(cuentaLetras(animals))