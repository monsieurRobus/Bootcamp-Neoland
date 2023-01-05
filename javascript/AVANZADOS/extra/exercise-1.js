// Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

// De tal modo que si tenemos el texto "Peter Parker" obtendremos dos variables...una con el valor "Peter" y otra con el valor "Parker".

// En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()

const splitName = (fullName) => {
    const indiceSeparacion = fullName.indexOf(" ")
    return [fullName.substring(0,indiceSeparacion),fullName.substring(indiceSeparacion+1)]
}



const [nombre,apellido]=splitName("Carlos Díaz")

console.log(nombre)
console.log(apellido)