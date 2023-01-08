import { initContent } from "../main"
import { hangMan } from "./hangMan/hangMan"
import { memoryGame } from "./memoryGame/memoryGame"
import { pokeApi } from "./pokeApi/pokeApi"
import { quizGame } from "./quizGame/quizGame"
import { ticTacToe } from "./ticTacToe/ticTacToe"
import { whackAMole } from "./whackAMole/whackAMole"


export const addCardEventListener = (game) => {
    const cardElement = document.querySelector(`#card-${game}`)
            
    switch(game) {
        case 'pokeApi':
            cardElement.addEventListener('click',()=>{initContent("pokeApi")})
        break;
        case 'hangMan':
            cardElement.addEventListener('click',()=>{initContent("hangMan")})
        break;
        case 'memoryGame':
            cardElement.addEventListener('click',()=>{initContent("memoryGame")})
        break;
        case 'quizGame':
            cardElement.addEventListener('click',()=>{initContent("quizGame")})
        break;
        case 'ticTacToe':
            cardElement.addEventListener('click',()=>{initContent("ticTacToe")})
        break;
        case 'whackAMole':
            cardElement.addEventListener('click',()=>{initContent("whackAMole")})
            
        break;
        
    }

}



export const cardDashboard = (game) => `
    <figure id="card-${game.name}" style="background:rgba(0,0,0,0.2) url('${game.img}'); background-position:center; background-size: contain; background-repeat: no-repeat;" class="card">        
        <div class="card-title">
            <h3>${game.name}</h3>
        </div>        
    </figure>
    `
