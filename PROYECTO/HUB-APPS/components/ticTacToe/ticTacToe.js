import { initContent } from '../../main'
import { Button } from '../button'
import './ticTaeToe.css'

let gameRunning = false

const startGame = () => {
    alert("Empezamos Juego!")
    const turnOf = Math.floor(Math.random())
    turnOf == 0 ? // 0 => Player, 1 => Computer
        playerMovement()
        :
        computerMovement()
}

const playerMovement = () => {
    const headerTicTacToe = document.querySelector("#header-tic-tac-toe")
    headerTicTacToe.innerHTML="<h3><span class='player'>PLAYER</span> TURN</h3>"
    addTicTacToeListeners()
}

const gameCheck = (player) => {

    const classActive = (player=="computer") ? "active-computer" : "active"
    const cells = document.querySelectorAll(".cell")

    // Game checks
    //
    //  +-----+----  -+-----+             Games:
    //  |  0  |  1  |  2  |                 G1: 0 · 1 · 2
    //  +-----+-----+-----+                 G2: 3 · 4 · 5
    //  |  3  |  4  |  5  |                 G3: 6 · 7 · 8   G7: 0 · 4 · 8
    //  +-----+-----+-----+                 G4: 0 · 3 · 6   G8: 2 · 4 · 6
    //  |  6  |  7  |  8  |                 G5: 1 · 4 · 7
    //  +-----+-----+-----+                 G6: 2 · 5 · 8
    
    const possibleGames = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for(let game of possibleGames)
        if(cells[game[0]].children[0].classList.contains(classActive) && cells[game[1]].children[0].classList.contains(classActive) && cells[game[2]].children[0].classList.contains(classActive))
            return [true,game]
        
    return [false,0]
            

}



export const computerMovement = () =>{

    const headerTicTacToe = document.querySelector("#header-tic-tac-toe")
    headerTicTacToe.innerHTML="<h3><span class='turn'>COMPUTER</span> TURN</h3>"
    
    const cells = document.querySelectorAll(".cell")   
    
    setTimeout(()=> {const selectCellNumber = () => {
        
    // CASOS => ES una puerta NOR
    // A Ac S
    // 0 0  1
    // 0 1  0
    // 1 0  0
    // 1 1  0 

        const listAviableCells = []

        for(let i=0; i<cells.length; i++)
            if(!(cells[i].children[0].classList.contains("active") || cells[i].children[0].classList.contains("active-computer")))
                listAviableCells.push(i)
                

        return listAviableCells[0]
    }

    const cellNumber = selectCellNumber()

    selectCell(cells[cellNumber],"computer")},1500)  

}

const selectCell = (e,player) => {
    let cellToActive
    let result
    let play
    let nextPlayer

    (e.target) ?
        cellToActive = e.target
        :
        cellToActive = e

    if(player === "player")
            {
                
                cellToActive.classList.add("active")
                cellToActive.classList.remove("cell-content")
                nextPlayer="computer"
                
            }
        
    else
            {
                cellToActive.innerHTML="<span class='cell-content'>⭕</span>"
                cellToActive.children[0].classList.add("active-computer")
                cellToActive.children[0].classList.remove("cell-content")                
                nextPlayer="player"
                
                
            }

    [result,play] = gameCheck(player)
    console.log(result+" "+play)
    if(result)
        gameWinner(player,play)
    else{ 
                switch(nextPlayer){
                    case 'player':
                        playerMovement()
                    break;
                    case 'computer':
                        computerMovement()
                    break;        
                }
        }    

}

const gameWinner = (winner) => {

}

export const ticTacToe = () => `

<div id="header-tic-tac-toe" class=""><h3>Player VS Human</h3></div>
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

        // Evento de click para probar el movimiento del ordenador
        document.addEventListener('keydown', (event) => {
            computerMovement()
        });

}

const deleteTicTacToeListeners = () => {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells)
        cell.removeEventListener("click",(e)=>selectCell(e,"player"))

}

