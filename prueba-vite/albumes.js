import { data } from "./data"


const getSonglist = (songs) => 
{
    let songlist = '';
    
    console.log(songs)
    for(const song of songs)
        {
            let minutos=Math.floor(song.length/60)
            let segundos=song.length - minutos * 60
            songlist+=`<li><span class="titulo-cancion">${song.title}</span><span class="duracion">${minutos}:${segundos <10 ? "0"+segundos : segundos}</span></li>`
        }

    return songlist;
}



const getAlbumes = (albums) => {
    let dibujaAlbumes = ''
    
    for (let album of albums){
        let minutos=Math.floor(album.length/60)
        let segundos=album.length - minutos * 60
        const songlist = getSonglist(album.songlist)
        dibujaAlbumes+=`
        <div class="album">
            <h2>${album.title}</h2>
            <img src="${album.cover}" />
            <h3>${minutos}:${ segundos<10 ? "0"+segundos : segundos }</h3>
            <ol>
                ${

                    getSonglist(album.songlist)

                }
            </ol>
        </div>
        
        `}

    return dibujaAlbumes;

};


let albumes = getAlbumes(data.albums)





export const Albumes = () => `
    ${albumes}
`;




