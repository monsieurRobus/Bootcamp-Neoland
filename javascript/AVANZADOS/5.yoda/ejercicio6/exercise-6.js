const characterSelect = document.querySelector("[data-function='characters']")
const urlCharacters = 'http://localhost:3000/characters'

const getCharacters = async(url) => {

    return await fetch(url).then(res => res.json())     

}

const pintaCharacters = async(personajes) => {

    for (personaje of personajes)
        {
            const div = document.createElement("div")
            div.classList.add('character-choice')
        }

}



let personajes = getCharacters(urlCharacters)

console.log(personajes)
