const characterSelect = document.querySelector("[data-function='characters']")
const urlCharacters = 'http://localhost:3000/characters'
const botonJugar = document.querySelector("#comienza-juego")
const portadaJuego = document.querySelector("#portada")



let jugador1 = {};
let jugador2 = {};
let personajes;

const getCharacters = async(url) => {
    let listaPersonajes;
    await fetch(url).then(res => res.json()) 
        .then(res => listaPersonajes=res)
        .then(res=>pintaCharacters(res))

    return listaPersonajes

}

const pintaCharacters = async(personajes) => {

    for await (personaje of personajes)
        {
            
            console.log(personaje.avatar)
            const div = document.createElement("div")
            div.id=`${personaje.name}`
            div.innerHTML=`<h1>${personaje.name}</h1><div class="stats"><span>⚔️${personaje.critic}</span><span>🛡️${personaje.defense}</span><span>💓${personaje.vitality}</span></div>`
            div.classList.add('c-characters__item')
            div.style.backgroundImage=`url("${personaje.avatar}")`
            div.style.backgroundSize="cover";
            characterSelect.appendChild(div)
            div.addEventListener('click',seleccionaPersonaje)

        }

}



personajes =  getCharacters(urlCharacters)

botonJugar.addEventListener('click',(b) => {
    portadaJuego.classList.remove('inicio')   
    portadaJuego.classList.add('modal-ocultar') 
})


const seleccionaPersonaje = (e) => {

    console.log(personajes)
    const jugador = e.target.id
    if(jugador1 === undefined)
        {
            pintaJugador(jugador,1)
        }
    else    
        {
            pintaJugador(jugador,2)
        }
}

const pintaJugador = (jugador,numero) => {



}