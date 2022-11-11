const urlPlanetas = 'http://localhost:3000/planets';
const urlCharacters = 'http://localhost:3000/characters';
const divPlanetas = document.querySelector("[data-function='planets']")
const divCharacters = document.querySelector("[data-function='characters']")
const inputText = document.querySelector("input.busqueda")


let auxPlaneta;
const getPlanetas = async (url) => {
    
    let planetas = await fetch(urlPlanetas)
            .then(res=> res.json())
            .then(res=> auxPlaneta = res)
            .then(res => dibujaPlanetas(auxPlaneta))

} 

const dibujaPlanetas = (planetas) => {

    let divPl="";       /**! Ojo cuidao, si no se inicializa nos aparece undefined uwu */
    for (planeta of planetas)
        divPl += `<div class="planeta" id="${planeta.id}"><h3>${planeta.name}</h3><img src="${planeta.image}"/></div>`
        
    divPlanetas.innerHTML+=divPl

    for (planeta of divPlanetas.children)
        planeta.onclick= getPersonajes
    
}

const getPersonajes = async (planeta) => {

    divCharacters.innerHTML=``
    inputText.value=``
    for (elemento of planeta.path)
        if(elemento.classList.contains("planeta"))
            {
                const personajes = await fetch(urlCharacters+`?idPlanet=${elemento.id}`)
                            .then(res=>res.json())
                            .then(res=>dibujaPersonajes(res))                            
                break;
            }

}


const filterCharacters = (e) => {


    let filtro = e.target.value // Almacenamos el valor del filtro
    let personajes = divCharacters.children;
    for (personaje of personajes)
        if(!personaje.children[0].innerHTML.toLowerCase().includes(filtro.toLowerCase())) // Comparamos el contenido del nombre con el filtro 
            personaje.classList.add("ocultar")
        else    
            personaje.classList.remove("ocultar")


}

inputText.addEventListener("input",filterCharacters)

getPlanetas(urlPlanetas)

const dibujaPersonajes = (personajes) => {
    
    for (personaje of personajes)       
            divCharacters.innerHTML+=`<div class="personaje" id="${personaje.id}"><h3>${personaje.name}</h3><p>${personaje.description}</p><img src="${personaje.avatar}"/></div>`

}



