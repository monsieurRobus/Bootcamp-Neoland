const personajesElement = document.querySelector('#personajes')
const url = "https://breakingbadapi.com/api/characters"

const get = async (url) => {
    return  await fetch(url)
        .then(res => res.json())
        .then(res => mostrarDatos(res))
        .catch(error=> console.log(`EEEH ${error}`))
}
const mostrarDatos = (data) => {
    console.log(data)
    for (personaje of data)
    personajesElement.innerHTML+=`<div class="tarjeta"><h2>${personaje.name}</h2><img src="${personaje.img}" /></div>`
}

let personajes = get(url)


