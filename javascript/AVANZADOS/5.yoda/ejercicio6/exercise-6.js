const characterSelect = document.querySelector("[data-function='characters']")
const urlCharacters = 'http://localhost:3000/characters'
const botonJugar = document.querySelector("#comienza-juego")
const portadaJuego = document.querySelector("#portada")
const jugarSFX = new Audio('./public/sfx/pickupCoin.wav');
const centroJuego = document.querySelector('#centro')

let jugador1;
let jugador2;
let personajes = [];

const getCharacters = async(url) => {
    let listaPersonajes;
    await fetch(url).then(res => res.json()) 
        .then(res=>personajes=res)
        .then(res=>pintaCharacters(res))

}

const pintaCharacters = (personajes) => {

    for  (personaje of personajes)
        {
            
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

getCharacters(urlCharacters)

botonJugar.addEventListener('click',(b) => {
    jugarSFX.play()
    portadaJuego.classList.remove('inicio')   
    portadaJuego.classList.add('modal-ocultar') 
})


const seleccionaPersonaje = (e) => {

    const jugador = e.target.id
    if(jugador1 === undefined)
        {
            e.target.classList.add('seleccionado-jugador1')
            jugador1 =  personajes.filter( personaje => personaje.name === e.target.id )
            pintaJugador(jugador1,1)
        }
    else    
        {
            e.target.classList.add('seleccionado-jugador2')
            jugador2 =  personajes.filter( personaje => personaje.name === e.target.id )
            pintaJugador(jugador2,2)
        }

        if(jugador1 && jugador2 !== undefined)
            setTimeout(()=>{
                
                for (hijo   of characterSelect.children)
                    {
                        hijo.classList.remove('seleccionado-jugador1')
                        hijo.classList.remove('seleccionado-jugador2')
                        characterSelect.classList.add('desaparece')
                    }
                

            },1500)
}

const pintaJugador = async(jugador,numero) => {
    let divJugador;
        switch(numero){
            case 1:                 
                divJugador = document.querySelector("#jugador-1")
                
                divJugador.innerHTML=`
                    <figure class="tarjeta entrada">
                        <div class="tarjeta-contenedor">
                            <div style="background-image: url('${jugador[0].avatar}'); background-size:cover" class="tarjeta-frente">
                                <div class="stats"><span>⚔️${personaje.critic}</span><span>🛡️${personaje.defense}</span><span>💓${personaje.vitality}</span></div>
                            </div>
                            <div class="tarjeta-espalda1">
                                <img class="tarjeta-trasera-logo" src="./img/trasera-tarjeta.png" />
                                <h1>${jugador[0].name}</h1>                                    
                            </div>
                        </div>
                    </figure>
                `
                tiradasDados(jugador[0].damage) // Comprobamos que funciona
                divJugador.style.backgroundSize='cover'
            break;

            case 2:                
                divJugador = document.querySelector("#jugador-2")
                
                divJugador.innerHTML=`
                    <figure class="tarjeta entrada">
                        <div class="tarjeta-contenedor">
                            <div style="background-image: url('${jugador[0].avatar}'); background-size:cover" class="tarjeta-frente">
                                <div class="stats"><span>⚔️${personaje.critic}</span><span>🛡️${personaje.defense}</span><span>💓${personaje.vitality}</span></div>
                            </div>
                            <div class="tarjeta-espalda2">
                                <img class="tarjeta-trasera-logo" src="./img/trasera-tarjeta.png" />
                                <h1>${jugador[0].name}</h1>                                    
                            </div>
                        </div>
                    </figure>
                `
                tiradasDados(jugador[0].damage) // Comprobamos que funciona
                divJugador.style.backgroundSize='cover'
            break;
        }

}


const tiradasDados = (tiradas) => {
centroJuego.innerHTML=''
let danioTotal=0;
        
        for (tirada of tiradas) {
            tirada=tirada.split('d')
            
            let [dados,danioMax] = tirada
            dados= parseInt(dados)
            
            danioMax = parseInt(danioMax)
            // Bucle de tiradas de dado
                for (var i=0;i<dados;i++){
                    setTimeout(()=>{
                        let danio = Math.floor(Math.random()*danioMax)+1
                        danioTotal+=danio
                        centroJuego.innerHTML+=`<span>${danio}</span>`;
                    },250*i)
        }

        
        


}
        // dibujamos el daño final
        setTimeout(()=>{
                    
            centroJuego.innerHTML+=`<span class="danio-total">${danioTotal}</span>`;
        },1000*tiradas.length)

}