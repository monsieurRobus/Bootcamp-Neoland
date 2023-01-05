import { initContent } from '../../main'
import { Button } from '../button'

import './whackAMole.css'

let score
let moleList = []
let moleTable
let curve = 1
let puntos = 0
let tickDeleteMole
let createMole

const addMoleEventListeners = () => {
  const ratones = document.querySelectorAll(".mole")
  for(let raton of ratones)
    raton.addEventListener('click',sumaPuntos)
}

const sumaPuntos = (e) => {
  puntos++;
  const pointsElement = document.querySelector("#whack-a-score")
  pointsElement.innerHTML=puntos  
  deleteMole(moleList.indexOf(parseInt(e.target.id)))
  updateScreen()
  clearTimeout(tickDeleteMole)
  tickTempoMole()
  curve *=0.92 // La velocidad cada vez disminuye más
}

const addMole = () => {
    createMole = setTimeout(()=> {
    const moleToAdd = Math.floor(Math.random()*moleTable.length)
    const indexOnList = moleList.indexOf(moleToAdd)
    
    if(indexOnList < 0)
      moleList.push(moleToAdd)    

    
    curve *=0.99
    if(curve <0.3)
      curve=0.3
    

    addMole()
    updateScreen()
  },2000*curve)
}

const tickTempoMole = () =>  {
  tickDeleteMole = setTimeout(()=> {
      deleteMole()
      tickTempoMole()
  },5000*curve)  
}

const deleteMole = (mole="shift") => {
  if(mole === "shift")
    moleList.shift()
  else
    moleList.splice(mole,1)

  updateScreen()
}


const updateScreen = () => {
  
  for(let mole of moleTable){
    mole.innerHTML=""
  }
  for (let mole of moleList) {
    moleTable[mole].innerHTML=`<span id="${mole}" class='mole'>🐭</span>`
  }
  addMoleEventListeners()
}


const endGame = (volver) => {
  clearTimeout(tickDeleteMole)
  clearTimeout(createMole)
  
  
  puntos=0
  curve=1
  if(volver)
    initContent("hub")
  else 
    {
      score.innerHTML=0
      for (let mole of moleTable)
        mole.innerHTML=""
    }
}

export const addWhackEventListeners = () => {
    const volver = document.querySelector("#whack-a-volver")
    const empezarReload = document.querySelector("#whack-a-empezar-reload")
    
    empezarReload.addEventListener("click",()=>startGame())    
    
    volver.addEventListener("click",()=>endGame(true))
    
}

export const startGame = () => {

    score  = document.querySelector("#whack-a-score")
    const empezarReload = document.querySelector("#whack-a-empezar-reload")
    moleList = []
    moleTable = document.querySelectorAll(".celda")
    

    empezarReload.innerHTML == "Empezar" ? empezarReload.innerHTML="Recargar" : empezarReload.innerHTML="Regargar"

    endGame(false)
    addMole()
    tickTempoMole()



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

            <div id="whack-a-botonera">${Button('Empezar','whack-a-empezar-reload')}${Button('Volver','whack-a-volver')}</div>
            
        
        </section>

`