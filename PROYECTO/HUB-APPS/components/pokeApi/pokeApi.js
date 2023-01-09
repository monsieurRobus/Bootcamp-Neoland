import { initContent } from "../../main"
import { Button } from "../button"
import { urlPokemon, urlPokemonSpecies } from "./urlPokemon"
import { pokemonTypes } from "./pokemonTypes"

import './pokeApi.css'

let listaPokemon = []
let listaNombresPokemon = []

export const pokeApi = () => `

    <section id="poke-api">
        <h2>PokeDEX</h2>
        <div id="poke-api-contenedor"></div>
        <div id="controles-pokedex">
        

        
        <input id="busqueda" placeholder="Search" type="text"/>${Button("⬅️",'previous-page')}<span id="pokemon-page"></span>${Button("➡️",'next-page')}</div>
        <div id="pokemon-type-filter">${getTypesFilter()}</div>
        <div id="botonera-pokedex">${Button("volver",'volver-pokeapi')}</div>
        
    </section>
    
    <div id="pokemon-modal" class="modal-pokemon">
        <div class="modal-pokemon-content">
            <div id="close-modal" ><span class="close">&times;</span></div>
            
            <div id="header-modal">
                <div id="titulo-modal">
                    <span class="label">Nombre:</span>
                    <h1 id="nombre-pokemon">Pokemon el que sea</h1>
                    <span id="tipos-pokemon">b</span>
                    <div id="pokemon-characteristics"><span id="pokemon-weight"></span><span>🔵</span><span id="pokemon-height"></span></div>
                </div>
                <div id="imagen-modal">
                
                </div>
            </div>
            <div id="description-modal">

            </div>
            <div id="stats-modal">
                
            </div>
            <div id="attacks-modal">

            </div>


        </div>

    </div>

`

export const getPokemon = async(inicial) => {
    
    const divPokemon = document.querySelector("#poke-api-contenedor")
    divPokemon.innerHTML=``

    const inputText = document.querySelector("#busqueda")
    inputText.value=``

    
    const pokemon = await fetch(urlPokemon+"?limit=151")
                .then(res=>res.json())
                .then(res=>preparaListaPokemon(res.results))
                .then(res=>{
                    
                    [listaNombresPokemon,listaPokemon] =res

                    dibujaPokemon(listaPokemon)
                })    
                
    

            
    

}

const preparaListaPokemon = async(lista,pagina=1,filters='none',name='none') => {
    let listaCompleta = []
    

    const pokemonPage = document.querySelector("#pokemon-page")
    pokemonPage.innerHTML=pagina
    
    for (let pokemon of lista)
        {
            if(!pokemon.id)
                {
                    const last = pokemon.url.split("/")
                    pokemon.id = last[last.length-2]
                }           
        }
        
    for (let i=15*(pagina-1);i<15*pagina;i++)
        try {listaCompleta.push(await fetch(lista[i].url).then(res=>res.json())
                .then(res => {
                        
                    if(filters!='none')
                        {                              
                            res.types.forEach(x=> console.log(x))
                        }
                        
                        return res                    
                    }

                )
            )
            
        }
        catch { console.info("Ese pokemon no está en la lista")}
        

        return [lista,listaCompleta]
}

const dibujaPokemon = (lista) => {
    const divPokemon = document.querySelector("#poke-api-contenedor")
    divPokemon.innerHTML=''
    for (let pokemon of lista)       
            divPokemon.innerHTML+=`
            <div id="${pokemon.id}" class="pokemon-card">
                    <h2 class="pokemon-name">${pokemon.name}</h2>
                    <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="Imagen del Pokémon">
                    <p class="pokemon-types">${getPokemonTypes(pokemon)}</p>
            </div>`

    addPokeCardsEventListeners()
    addPokeFiltersEventListeners()
}


const getPokemonTypes = (pokemon) => {
    let types = []
    let content = ``
    for(let tipos of pokemon.types) {
        switch(tipos.type.name.toLowerCase())
        {
            case 'rock':
                content=`<span class="pokemon-type rock">rock</span>`
                break;
            case 'fire':
                content=`<span class="pokemon-type fire">fire</span>`
                break;
            case 'water':
                content=`<span class="pokemon-type water">water</span>`
                break;
            case 'grass':
                content=`<span class="pokemon-type grass">grass</span>`
                break;
            case 'normal':
                content=`<span class="pokemon-type normal">normal</span>`
                break;
            case 'electric':
                content=`<span class="pokemon-type electric">electric</span>`
                break;
            case 'fighting':
                content=`<span class="pokemon-type fighting">fighting</span>`
                break;
            case 'poison':
                content=`<span class="pokemon-type poison">poison</span>`
                break;
            case 'ice':
                content=`<span class="pokemon-type ice">ice</span>`
                break;
            case 'ground':
                content=`<span class="pokemon-type ground">ground</span>`
                break;
            case 'flying':
                content=`<span class="pokemon-type flying">flying</span>`
                break;
            case 'psychic':
                content=`<span class="pokemon-type psychic">psychic</span>`
                break;
            case 'bug':
                content=`<span class="pokemon-type bug">bug</span>`
                break;
            case 'ghost':
                content=`<span class="pokemon-type ghost">ghost</span>`
                break;
            case 'dark':
                content=`<span class="pokemon-type dark">dark</span>`
                break;
            case 'dragon': 
                content=`<span class="pokemon-type dragon">dragon</span>`
                break;
            case 'steel':
                content=`<span class="pokemon-type steel">steel</span>`
                break;
            case 'fairy':
                content=`<span class="pokemon-type fairy">fairy</span>`
                break;
            
        }
        types.push(content)
    }
    return types.join('')
}

export const addEventListeners = () => {

    const volver = document.querySelector("#volver-pokeapi")
    const next = document.querySelector("#next-page")
    const previous = document.querySelector("#previous-page")  
    const closeModal = document.querySelector("#close-modal") 
    
    next.addEventListener("click",nextPage)
    previous.addEventListener("click",prevPage)
    volver.addEventListener("click",()=>initContent("hub"))
    closeModal.addEventListener("click",closeDetail)

}


const addPokeCardsEventListeners = () => {

    const pokemonCards = document.querySelectorAll(".pokemon-card")
    for (let card of pokemonCards)        
            card.addEventListener("click",pokemonDetail,false)
        

}

const addPokeFiltersEventListeners =() => {
    
    const pokeFilters = document.querySelectorAll('.filter-btn')
    for (let filter of pokeFilters)
        {
            filter.addEventListener("click",applyFilter)
        }
}

const nextPage = () => {
    let pagina = document.querySelector("#pokemon-page").innerHTML
    let result = []
    let listaPagina = []
    
    pagina++

    if(pagina<=11)
        {
            document.querySelector("#pokemon-page").innerHTML = pagina
            const resultado = async () => {
                return await preparaListaPokemon(listaNombresPokemon,pagina)
                .then(res=>
                    {
                    dibujaPokemon(res[1])
                    listaPokemon=res[1]
                }
                    )
            }
            
            resultado()
            
        }

    

}

const prevPage = () => {
    let pagina = document.querySelector("#pokemon-page").innerHTML
    let result = []

    pagina--

    if(pagina>0)
        {
            document.querySelector("#pokemon-page").innerHTML = pagina
            const resultado = async () => {
                return await preparaListaPokemon(listaNombresPokemon,pagina)
                .then(res=>
                    {
                    dibujaPokemon(res[1])
                    listaPokemon=res[1]
                }
                    )
            }
            
            resultado()
        }
    
}

const pokemonDetail = (e) => {
    let element 
    const nombrePokemon = document.querySelector("#nombre-pokemon")
    const tiposPokemon = document.querySelector("#tipos-pokemon")
    const imagenPokemon = document.querySelector("#imagen-modal")
    const pokemonWeight = document.querySelector("#pokemon-weight")
    const pokemonHeight = document.querySelector("#pokemon-height")
    const pokemonDescription = document.querySelector('#description-modal')
    const pokemonStats = document.querySelector("#stats-modal")
    const pokemonAttacks = document.querySelector("#attacks-modal")
    // nombrePokemon.innerHTML=
    if(e.target.tagName != "DIV")
        element = e.target.parentElement
    else
        element = e.target

    let pokemonData = listaPokemon.filter(pokemon => pokemon.id == element.id)
    pokemonData=pokemonData[0]
    let respuesta = ''
    const getDescription = async () => {
        return await fetch(urlPokemonSpecies+pokemonData.id)
            .then(res=>res.json()).then(res=>res.flavor_text_entries[26].flavor_text)
            .then(res=>{
                respuesta=res
                pokemonDescription.innerHTML=`<p>${respuesta}</p>`
                modalPokemon.style.display="flex"
            
            })
    }
    
    
    console.log(getDescription())

    nombrePokemon.innerHTML=pokemonData.name.toUpperCase()
    tiposPokemon.innerHTML=getPokemonTypes(pokemonData)
    imagenPokemon.innerHTML=`<img src="${pokemonData.sprites.front_default}"  alt="Imagen de ${pokemonData.name}" />`
    pokemonHeight.innerHTML=`📏${pokemonData.height/10} m`
    pokemonWeight.innerHTML=`⚖️${pokemonData.weight/10} kg`
    pokemonStats.innerHTML=`<h1>Stats📊</h1><div id="stats-modal-content">${getStats(pokemonData)}</div>`
    pokemonAttacks.innerHTML=`${getAttacks(pokemonData)}`
    const modalPokemon = document.querySelector("#pokemon-modal")
    
    

    

}

const closeDetail = (e) => {
    const modalPokemon = document.querySelector("#pokemon-modal")
    modalPokemon.style.display="none"
}

const getStats = (pokemon) => {
    let objectStats = []
    pokemon.stats.forEach(stat => {
        objectStats.push({
            name: stat.stat.name,
            value: stat.base_stat
        })

        }
        
        )

        let elemento =''
    for(let stat of objectStats)
        {
            let content = ''
            switch(stat.name) 
            {
                case "hp":
                        content='<span id="hp">💓</span>'
                    break;
                case "attack":
                        content='<span id="attack">⚔️</span>'
                    break;
                case "defense":
                        content='<span id="defense">🛡️</span>'
                    break;
                case "special-attack":
                    content='<span id="special-attack">⚡</span>'
                    break;
                case"special-defense":
                    content='<span id="special-defense">🪖</span>'

                    break;
                case "speed":
                    content='<span id="speed">🏃‍♂️</span>'

                    break;
            }
            content+=`<meter max="200" value="${stat.value}"></meter>`
            elemento+=`<div class="stat">${content}</div>`
        }
    
        return elemento
        
    
    

}


const getAttacks = (pokemon) => {

    let elemento =''
    for (let move of pokemon.moves)
        elemento+=`<span class="pokemon-moves">${move.move.name}</span>`


    return elemento

}

const getTypesFilter = () => {
    let result=''
    for (let type of pokemonTypes) 
    {
        result+=`<img id="${type.name}" title="${type.name}" class="filter-btn" src="${type.img}" alt="filter ${type.name}" />`
    }
    return result
}


const applyFilter = (e) => {

    const filterToApply = e.target.id;


    let pagina = document.querySelector("#pokemon-page").innerHTML

            const resultado = async () => {
                return await preparaListaPokemon(listaNombresPokemon,pagina,filterToApply)
                .then(res=>
                    {
                    dibujaPokemon(res[1])
                    listaPokemon=res[1]
                })
            }

        resultado()


}