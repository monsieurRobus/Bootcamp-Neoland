import { initContent } from "../../main"
import { Button } from "../button"
import { urlPokemon } from "./urlPokemon"


export const pokeApi = () => `

    <section id="poke-api">
        <h2>PokeDEX</h2>
        <div id="poke-api-contenedor"></div>
        <div id="controles-pokedex"><input id="busqueda" placeholder="Search" type="text"/>${Button("⬅️",'previous-page')}${Button("➡️",'next-page')}</div>
        <div id="botonera-pokedex">${Button("volver",'volver-pokeapi')}</div>
    </section>

`

export const getPokemon = async(inicial) => {
    const divPokemon = document.querySelector("poke-api-contenedor")
    divPokemon.innerHTML=``

    const inputText = document.querySelector("busqueda")
    inputText.value=``

    
    const personajes = await fetch(urlCharacters+`?idPlanet=${elemento.id}`)
                .then(res=>res.json())
                .then(res=>dibujaPersonajes(res))                            

            
    

}


export const addEventListeners = () => {
    const volver = document.querySelector("volver-pokeapi")

    volver.addEventListener("click",()=>initContent("hub"))
}