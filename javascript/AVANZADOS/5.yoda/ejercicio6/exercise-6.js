const characterSelect = document.querySelector('[data-function="characters"]')
const arenaJuego = document.querySelector('[data-function="arena"]')
const urlCharacters = 'http://localhost:3000/characters'
const botonJugar = document.querySelector("#comienza-juego")
const portadaJuego = document.querySelector("#portada")
const jugarSFX = new Audio('./public/sfx/pickupCoin.wav');
const centroJuego = document.querySelector('#centro')
const divJugador1 = document.querySelector('#jugador-1')
const divJugador2 = document.querySelector('#jugador-2')

// FE DE ERRATAS
// Funciones mas concisas. CADA FUNCION UNA ACCION, NO MUCHAS
// Componentizar más :C
// Pregunta a profes: inserto un botón de forma dinámica, ¿es mejor añadir el evento click desde un addEventListener o directamente al dibujar el elemento en el DOM?
// O Inglés o Español, pero nunca mezclar los dos

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

let jugador1;
let jugador2;
let personajes = [];
let siguienteTurno;

// TIRAR DADOS
const tiradasDados = (tiradas,jugador,puntosCritico) => {
    
    centroJuego.innerHTML=''
    let danioTotal=0
    let danioGrupoDados=0
    let siguienteJugador=1
    let claseCritico
    let multiplicador=1       

    // CALCULO DEL DAÑO REALIZADO POR EL JUGADOR
            for (tirada of tiradas) {
                tirada=tirada.split('d')
                let contenido='';
                let [dados,danioMax] = tirada
                let danio = 0
                danioGrupoDados=0
                dados= parseInt(dados)

                //Agrupamos cada Dado
                centroJuego.innerHTML+=``
                danioMax = parseInt(danioMax)
                 // Bucle de tiradas de dado
                    for (var i=0;i<dados;i++){
                        
                        danio = Math.floor(Math.random()*danioMax)+1                        
                        // Aplicamos el multiplicador en caso de critico
                        let multiplicador = (danio===puntosCritico) ? 2 : 1
                        claseCritico = (multiplicador ===2) ? 'critico' : 'normal'
                        danioGrupoDados+=danio*multiplicador   
                        // Usamos claseCritico no solo como la propia clase que añadir al elemento, sino como argumento para la función que devuelve la marca en cada golpe
                        contenido+=`<div style="background-image:url('${bloodSpots(claseCritico)}');" class="golpe-dado ${claseCritico}"><span >${danio}</span></div>`      
                        
            }    
            danioTotal+=danioGrupoDados            
                            
                hitSounds()
                centroJuego.innerHTML+=`<div class="titulo-dado">
                                                <h2>${dados} dados de ${danioMax} caras:</h2>
                                            </div>
                                                <div class="contenedor-dados">${contenido}</div>
                                            </div>`
            
            }
            // dibujamos el daño final
            setTimeout(()=>{
                        
                centroJuego.innerHTML+=`<span class="danio-total">${danioTotal}</span>`;
            },1000*tiradas.length)
            
            // quitamos la vida
            setTimeout(()=> {
            switch(jugador)
                {
                    case 1:
                        
                        quitaVida(danioTotal,2)
                        siguienteJugador=2
                        break;
                    case 2:
                        
                        quitaVida(danioTotal,1)
                        siguienteJugador=1
                        break;
                }

            },3000)
            
            // Ponemos un temporizador para cambiar el turno
            siguienteTurno = setTimeout(()=>{
                
                turnoDeJugador(siguienteJugador)
            },6000)

    }

// QUITAR VIDA AL OTRO JUGADOR

const quitaVida = (danio,jugador) => {

    let jugadorDestinoIndex;
    let vidaJugadorDestino = document.querySelector(`#vitalidad-jugador${jugador}`).innerHTML

    let defensaJugadorDestino = document.querySelector(`#defensa-jugador${jugador}`).innerHTML
    let jugadorOrigenIndex;
    switch (jugador) {
        case 1:

                jugadorOrigenIndex=2
                jugadorDestinoIndex=jugador
            break;
        case 2:

                jugadorOrigenIndex=1
                jugadorDestinoIndex=jugador
            break;
    }

    // SI EL DAÑO ES MENOR QUE LA DEFENSA, EL DAÑO SERÁ IGUAL A CERO
    if((danio-defensaJugadorDestino)>0)
        danio-=defensaJugadorDestino
    else
        danio=0

     // ME ESTA HACIENDO ALGO RARO EL DAÑO
    vidaJugadorDestino-=danio; // Al daño causado le restamos la defensa del jugador que recibe el impacto

    if(vidaJugadorDestino<=0)
        {
            clearTimeout(siguienteTurno)
            ganadorPartida(jugadorOrigenIndex)
        }
    else
        {
            const elementoVitalidad = document.querySelector(`#vitalidad-jugador${jugador}`)
            const elementoDefensa = document.querySelector(`#defensa-jugador${jugador}`)
            elementoVitalidad.innerHTML=`${vidaJugadorDestino}`
            elementoVitalidad.classList.add("golpe-vitalidad")
            elementoDefensa.classList.add("golpe-defensa")
            setTimeout(()=>{
                elementoVitalidad.classList.remove("golpe-vitalidad")
                elementoDefensa.classList.remove("golpe-defensa")
            },1500)
        }

}

// ¡Hurra! ¡Has ganado la partida!
const ganadorPartida = (jugador) => {
    
    divJugador1.children[0].classList.remove('turno')
    divJugador2.children[0].classList.remove('turno')
    divJugador1.children[0].classList.remove('entrada')
    divJugador1.children[0].classList.add('salida')
    centroJuego.innerHTML=''
    divJugador2.children[0].classList.remove('entrada')
    divJugador2.children[0].classList.add('salida')

    setTimeout(()=>{
        divJugador1.innerHTML=''
        divJugador2.innerHTML=''
    },800)

    portadaJuego.innerHTML=`
    <div class="modal-content victoria">
        <h1>¡¡ENHORABUENA!!</h1>
        <h2 id="rotulo-jugador-${jugador}">Jugador ${jugador}</h2>
        <figure class="tarjeta entrada">
            <div class="tarjeta-contenedor">
                <div style="background-image: url('${jugador===1?jugador1[0].avatar:jugador2[0].avatar}'); background-size:cover" class="tarjeta-frente">
                </div>
                <div class="tarjeta-espalda1">
                    <h1>¿Jugar de nuevo?</h1>
                    <button onclick="restart()">Alright!</button>                                                              
                </div>
            </div>
        </figure>
    </div>
`
    portadaJuego.classList.add('inicio')   
    portadaJuego.classList.remove('modal-ocultar')
}

// Bloodspots en los divs
const bloodSpots = (critico) => {
    // Si le llega la palabra "critico", devuelve mancha de sangre, si no, devuelve marca de hacha/arañazo
    const selectorMancha = Math.floor(Math.random()*3)
    switch (selectorMancha) {
        case 0:
            return (critico==='critico') ? `./img/spot1.png` : `./img/axe1.png`
            break;
        case 1:
            return (critico==='critico') ? `./img/spot2.png` : `./img/axe2.png`
            break;
        case 2:
            return  (critico==='critico') ? `./img/spot3.png` : `./img/axe3.png`
            break;
        default:
            break;
    }
}

const hitSounds = () => {

    const hit1 = new Audio('./public/sfx/hit1.ogg')
    const hit2 = new Audio('./public/sfx/hit2.ogg')
    const hit3 = new Audio('./public/sfx/hit3.ogg')

    const selectorSonido = Math.floor(Math.random()*3)
    switch (selectorSonido) {
        case 0:
            hit1.play()
            break;
        case 1:
            hit2.play()
            break;
        case 2:
            hit3.play()
            break;
        default:
            break;
    }
}



botonJugar.addEventListener('click',(b) => {
    jugarSFX.play()
    portadaJuego.classList.remove('inicio')   
    portadaJuego.classList.add('modal-ocultar') 
    centroJuego.innerHTML+=`<h1>Escoge tu personaje...</h1><h2 id="rotulo-jugador-1">Jugador1</h2>`
})

const seleccionaPersonaje = (e) => {
    let inicioJuego;
    if(e.target.classList.contains('c-characters__item'))
        {
    const jugador = e.target.id
    if(jugador1 === undefined)
        {
            e.target.classList.add('seleccionado-jugador1')
            jugador1 =  personajes.filter( personaje => personaje.name === e.target.id )
            centroJuego.innerHTML=`<h1>Escoge tu personaje...</h1><h2 id="rotulo-jugador-2">Jugador2</h2>`
            pintaJugador(jugador1,1)
        }
    else    
        {
            e.target.classList.add('seleccionado-jugador2')
            jugador2 =  personajes.filter( personaje => personaje.name === e.target.id )
            centroJuego.innerHTML=``
            pintaJugador(jugador2,2)
        }

        if(jugador1 && jugador2 !== undefined)
            inicioJuego = setTimeout(()=>{
                
                for (hijo   of characterSelect.children)
                    {
                        hijo.classList.remove('seleccionado-jugador1')
                        hijo.classList.remove('seleccionado-jugador2')
                        characterSelect.classList.add('desaparece')
                        arenaJuego.classList.add('arena-juego')
                        centroJuego.innerHTML=`<h2>¿Preparados?</h2>`
                        // Tras esconderse la barra superior, mostramos el título "preparados?" y seguimos

                        setTimeout(()=> {
                            comienzaJuego()
                        },3000)

                    }
                

            },1500)
        }
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
                                <div class="stats"><span>⚔️${jugador[0].critic}</span><span >🛡️<span id="defensa-jugador1">${jugador[0].defense}</span></span><span>💓<span id="vitalidad-jugador1">${jugador[0].vitality}</span></span></div>
                            </div>
                            <div class="tarjeta-espalda1">
                                <img class="tarjeta-trasera-logo" src="./img/trasera-tarjeta.png" />
                                <h1>${jugador[0].name}</h1>                                                                   
                            </div>
                        </div>
                    </figure>
                `
                
                divJugador.style.backgroundSize='cover'
            break;

            case 2:                
                divJugador = document.querySelector("#jugador-2")
                
                divJugador.innerHTML=`
                    <figure class="tarjeta entrada">
                        <div class="tarjeta-contenedor">
                            <div style="background-image: url('${jugador[0].avatar}'); background-size:cover" class="tarjeta-frente">
                                <div class="stats"><span>⚔️${jugador[0].critic}</span><span>🛡️<span id="defensa-jugador2">${jugador[0].defense}</span></span><span>💓<span id="vitalidad-jugador2">${jugador[0].vitality}</span></span></div>
                            </div>
                            <div class="tarjeta-espalda2">
                                <img class="tarjeta-trasera-logo" src="./img/trasera-tarjeta.png" />
                                <h1>${jugador[0].name}</h1>                                    
                            </div>
                        </div>
                    </figure>
                `
                // Comprobamos que funciona
                divJugador.style.backgroundSize='cover'
            break;
        }

}

const comienzaJuego = () => {

    const rotuloComienza =`<h1>Comienza...</h1>`
    const rotuloJugador1 =`<div id="rotulo-jugador-1"><h2>Jugador 1</h2></div>`
    const rotuloJugador2 =`<div id="rotulo-jugador-2"><h2>Jugador 2</h2></div>`
    const resultadoSeleccion = Math.floor(Math.random()*2)+1
        
    centroJuego.innerHTML=rotuloComienza+rotuloJugador1

    let intermitenciaRotulo = setInterval(()=>{
        centroJuego.querySelector('div').id === `rotulo-jugador-1` ? centroJuego.innerHTML=rotuloComienza+rotuloJugador2 : centroJuego.innerHTML=rotuloComienza+rotuloJugador1
    },150)

    setTimeout(()=>{
        clearInterval(intermitenciaRotulo)
        centroJuego.innerHTML= rotuloComienza
        
        switch(resultadoSeleccion) {
            case 1:
                centroJuego.innerHTML+=rotuloJugador1
                
                break;
            case 2:
                
                centroJuego.innerHTML+=rotuloJugador2
                break;
        }
        // Se muestra el jugador inicial y empezamos
        setTimeout(()=>{

            centroJuego.innerHTML=``
            turnoDeJugador(resultadoSeleccion)  
    
        },2000)

    },2000)
    
}

const turnoDeJugador = (jugador) => {

    switch(jugador) {
        case 1:
            divJugador1.classList.add('turno')
            divJugador2.classList.remove('turno')
            break;
        case 2:            
            divJugador2.classList.add('turno')
            divJugador1.classList.remove('turno')
            break;
    }
    centroJuego.innerHTML=`<button id="ataca-jugador${jugador}" onclick="tiradasDados(jugador${jugador}[0].damage,${jugador},jugador${jugador}[0].critic)">Jugador ${jugador} ¡Ataca!</button>`

}

const restart = () => {
    jugador1=undefined
    jugador2=undefined
    characterSelect.classList.remove('desaparece')
    divJugador1.classList.remove('turno')
    divJugador2.classList.remove('turno')
    divJugador1.innerHTML=``
    divJugador2.innerHTML=``
    portadaJuego.classList.remove('inicio')
    portadaJuego.classList.remove('victoria')
    portadaJuego.classList.add('modal-ocultar') 

}