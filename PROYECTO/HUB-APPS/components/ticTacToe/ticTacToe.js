import { initContent } from '../../main'
import { Button } from '../button'
import './ticTaeToe.css'

let gameRunning = false

const startGame = () => {
    alert("Empezamos Juego!")
    gameRunning = true
}

const playerMovement = () => {

}

const gameCheck = () => {

}

const computerMovement = () =>{

    selectCell("computer")

}

const selectCell = (e,player) => {
  console.log(e.target)
}

export const ticTacToe = () => `


<div class="boardTicTacToe">
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>    
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
    <div class="cell">
        <span class="cell-content">❌</span>
    </div>
</div>
<div id="whack-a-botonera">${Button('Empezar','tic-tac-toe-empezar')}${Button('Volver','tic-tac-toe-volver')}</div>
`

export const addTicTacToeListeners = () => {

    const buttonStart = document.querySelector('#tic-tac-toe-empezar')
    const buttonBack = document.querySelector('#tic-tac-toe-volver')
    const cells = document.querySelectorAll(".cell")

    buttonBack.addEventListener("click",()=>initContent("hub"))
    buttonStart.addEventListener("click",()=>startGame())
    for (let cell of cells)
        cell.addEventListener("click",(e)=>selectCell(e,"player"))


}

