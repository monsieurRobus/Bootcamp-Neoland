import { initContent } from '../../main'
import { Button } from '../button'
import './ticTaeToe.css'

let canSelect = false

const gameTurn = (player) => {

    (player === undefined) ? 
        setupGame() :
        nextTurn(player)

}

const setupGame = () => {
    addTicTacToeGameListeners()
    alert("Empezamos juego!")
    const turnOf = Math.floor(Math.random()*2)
    turnOf == 0 ? // 0 => Player, 1 => Computer
        playerMovement()
        :
        computerMovement()
}

const nextTurn = (player) => {
    (player==="player") ?
        playerMovement() :
        computerMovement()
}

const playerMovement = () => {
    const headerTicTacToe = document.querySelector("#header-tic-tac-toe")
    headerTicTacToe.innerHTML="<h3><span class='player'>PLAYER</span> TURN</h3>"
    canSelect = true
    
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

const selectCellNumber = () => {
    const cells = document.querySelectorAll(".cell") 
    let choice=-1
    // FUNCION DE SELECCION DE CELDA POR PARTE DE LA COMPUTADORA
    // CASOS => ES una puerta NOR
    // A Ac S
    // 0 0  1
    // 0 1  0
    // 1 0  0
    // 1 1  0 



        const listAviableCells = []
        const listPlayerCells = []
        const listComputerCells = []
        let result
        let element
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
        for(let i=0; i<cells.length; i++)
            {
                if(!(cells[i].children[0].classList.contains("active") || cells[i].children[0].classList.contains("active-computer")))
                    listAviableCells.push(i)

                if(cells[i].children[0].classList.contains("active"))
                    listPlayerCells.push(i)

                if(cells[i].children[0].classList.contains("active-computer"))
                    listComputerCells.push(i)
            }

           

        // If first game, center cell

        if (listAviableCells.length == 9)
            choice = 4
        else
        {
            // If not, we'll see if we can "screw" the players game in all it's variants
            if (listPlayerCells.length==2)
                {
                    result = possibleGames.filter(arr2 => {
                        let count = 0
                        let extra = -1
                        for (const elem of listPlayerCells) {
                            if (arr2.includes(elem)) {
                            count++;
                            }                            
                            
                        }
                        return count >= 2 
                    })



                console.log(result)
                    
                
                if(result.length > 0){
                    
                    element = result[0].find( 
                        x=> !listPlayerCells.includes(x)
                    
                    
                    )
                
                }
                else {
                    element = listAviableCells[Math.floor(Math.random()*listAviableCells.length)]
                }

                choice = element

                }
            else if(listPlayerCells>2) 
            {
                choice = listAviableCells[Math.floor(Math.random()*listAviableCells.length)]
            }
            
            else{

                if(listAviableCells.includes(4)) 
                    {
                        // If player didn't choose center cell, then computer will
                        choice = 4                
                    }
                else
                    {
                        choice = listAviableCells[Math.floor(Math.random()*listAviableCells.length)]
                    }
                }

            
            

        }   
        

        

        return choice
    

    }

const findOpportunity = () => {
    
}

export const computerMovement = () =>{
    canSelect=false
    const headerTicTacToe = document.querySelector("#header-tic-tac-toe")
    headerTicTacToe.innerHTML="<h3><span class='turn'>COMPUTER</span> TURN</h3>"
    canSelect=false
    setTimeout(()=>{
        const cells = document.querySelectorAll(".cell")   
        const cellNumber = selectCellNumber()    
        canSelect=true
        selectCell(cells[cellNumber],"computer")
        
    },1500)

}

const selectCell = (e,player) => {
    if(canSelect)
    {
        deleteTicTacToeListeners(e)
        let cellToActive
        let result
        let play
        let nextPlayer

        (e.target) ?
            cellToActive = e.target
            :
            cellToActive = e

        if((player === "player"))
                {
                    
                        cellToActive.classList.add("active")
                        cellToActive.classList.remove("cell-content")
                        nextPlayer="computer"
                        canSelect = false
                    
                }
            
        else
                {
                    cellToActive.innerHTML="<span class='cell-content'>⭕</span>"
                    cellToActive.children[0].classList.add("active-computer")
                    cellToActive.children[0].classList.remove("cell-content")                
                    nextPlayer="player"
                    
                    
                }

        [result,play] = gameCheck(player)
        if(result)
                gameWinner(player,play)
        else{ 
                gameTurn(nextPlayer)
            }    
    }
}

const gameWinner = (winner,play) => {
    
    const cells = document.querySelectorAll(".cell")  
    const headerTicTacToe = document.querySelector("#header-tic-tac-toe")
    headerTicTacToe.innerHTML=`<h3><span class='turn'>${winner}</span> wins!!!</h3>`
    for (let cell of play)
        {
            cells[cell].classList.add("winner")
            cells[cell].children[0].classList.remove("active")
            cells[cell].children[0].classList.remove("active-computer")
        }



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


    buttonBack.addEventListener("click",()=>initContent("hub"))
    buttonStart.addEventListener("click",()=>gameTurn())


        // // Evento de click para probar el movimiento del ordenador
        // document.addEventListener('keydown', (event) => {
        //     computerMovement()
        // });

}
const addTicTacToeGameListeners = () => {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells)
    cell.addEventListener("click",(e)=>selectCell(e,"player"))

}
const deleteTicTacToeListeners = (e) => {
    const cells = document.querySelectorAll(".cell")
    for (let cell of cells)
        cell.removeEventListener("click",(e)=>selectCell(e,"player"))

}

