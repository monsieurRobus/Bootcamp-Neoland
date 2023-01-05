import { data } from "./data"


// Generamos las etiquetas de generos musicales
let generos="";

for (const genero of data.genre)
    generos+=`<span class="${genero=="rock" ? 'genre rock' : 'genre'}">${genero}</span>`

export const Biografia = () => 
    `
        <h1>BIOGRAFÍA DE MUSE</h1>
        <img src="https://i.pinimg.com/736x/28/76/30/2876308f685e9bf8714c98385da344a4--muse-muse-photo-sessions.jpg" alt="El trio MUSE al completo"/>
        <p>${data.biography}</p>
        <h2>Año de fundación</h2>
        <p>${data.foundation}</p>
        <h2>Géneros musicales</h2>
        <p>${generos}</p>
    
    `;


