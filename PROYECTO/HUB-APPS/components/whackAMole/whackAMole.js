import { initContent } from '../../main'
import { Button } from '../button'

import './whackAMole.css'






export const addWhackEventListeners = () => {
    const volver = document.querySelector("#whack-a-volver")
    const empezarReload = document.querySelector("#whack-a-empezar-reload")

    empezarReload.addEventListener("click",()=>startGame())    
    
    volver.addEventListener("click",()=>initContent("hub"))
    
}

export const startGame = () => {

    const score = document.querySelector("#whack-a-score")
    const empezarReload = document.querySelector("#whack-a-empezar-reload")

    empezarReload.innerHTML == "Empezar" ? empezarReload.innerHTML="Recargar" : empezarReload.innerHTML="Empezar"


}

export const whackAMole = () => `

        <section id="wack-a-mole">
        
            <span id="whack-a-score">0</span>
            <div id="tablero-whack-a-mole">
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
                <div class="celda"></div>
            </div>            

            <div id="whack-a-botonera">${Button('Empezar','whack-a-empezar-reload')}<button id="whack-a-volver">Volver</button></div>
            
        
        </section>

`