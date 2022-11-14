const characterSelect = document.querySelector("[data-function='characters']")
const urlCharacters = 'http://localhost:3000/characters'
const botonJugar = document.querySelector("#comienza-juego")
const portadaJuego = document.querySelector("#portada")
const getCharacters = async(url) => {

    return await fetch(url).then(res => res.json()) 
    .then(res=>pintaCharacters(res))

}

const pintaCharacters = async(personajes) => {

    for await (personaje of personajes)
        {
            console.log(personaje.avatar)
            const div = document.createElement("div")
            div.innerHTML=`<h1>${personaje.name}</h1><div class="stats"><span>⚔️${personaje.critic}</span><span>🛡️${personaje.defense}</span><span>💓${personaje.vitality}</span></div>`
            div.classList.add('c-characters__item')
            div.style.backgroundImage=`url("${personaje.avatar}")`
            div.style.backgroundSize="cover";
            characterSelect.appendChild(div)

        }

}



let personajes = getCharacters(urlCharacters)



botonJugar.addEventListener('click',(b) => {
    portadaJuego.classList.remove('inicio')    
})
