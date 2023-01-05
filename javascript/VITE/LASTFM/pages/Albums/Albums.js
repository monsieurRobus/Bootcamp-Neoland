import "./Albums.css"

let datos

export const Albums = () => {
    const main = document.querySelector("main")
    let artist = ''
    main.innerHTML= `
        <h2>Seach your album:</h2>
        <input type="text" id="searchInput" />
        <button  id="searchBtn">Search</button>
        <section id="artists"></section>
    `
    
    const searchInput = document.querySelector('#searchInput')
    searchInput.addEventListener("input",(e) => {
        artist = e.target.value
    })

    const searchBtn = document.querySelector('#searchBtn')
    searchBtn.addEventListener("click",() => {
        getData(artist)
    })
    

}

const getData = async   (artist) => { 

    const raw = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=d7878e64f289547a92f79f28ea7d370b&format=json`)
                .then(res => res.json()).then(res=> datos = res)        
    
    const info = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=d7878e64f289547a92f79f28ea7d370b&format=json`)
    .then(res => res.json()).then(res=> datos = res)

    printInfo(raw,info)

}

const printInfo = (data,info) => {

    const artistas = document.querySelector("#artists")
    const lista = document.createElement("ul")
    artistas.appendChild(lista)
    console.log(info.artist)
    lista.innerHTML+=`<ul></ul>`
    
    for(const artista of data.results.artistmatches.artist)
        lista.innerHTML+=`<li>${artista.name}</li>`

}