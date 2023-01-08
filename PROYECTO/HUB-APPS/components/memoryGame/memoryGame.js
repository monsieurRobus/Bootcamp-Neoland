import { Button } from "../button"
import { cardArray } from "./cards"
import "https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"
import './memoryGame.css'
import { initContent } from "../../main"


let arrayCards = []
let card1;
let card2;

const startGame = () => {
    const gridCards = document.querySelector("[data-function='grid']")
    arrayCards=cardArray.sort((a,b)=>{      
        return Math.pow(-1,(Math.floor(Math.random()+0.5)))
    })
    gridCards.innerHTML=''
    let score = document.querySelector("[data-function='score']")
    score.innerHTML = 0
    
    let attemps = document.querySelector("[data-function='attempts']")
    attemps.innerHTML = 0


    for (let carta of arrayCards)
        gridCards.innerHTML+=`
        <figure id="${carta.id}" class="card-memory" data-function="${carta.name}">
            <div class="card-memory-content">
                <div class="card-memory-front">
                    <img src="./exercise-1/universe.svg" />
                </div>
                <div class="card-memory-back">
                    <img src="${carta.img}"/>
                </div>
            </div>
        </figure>
        `

    addEventListeners()
    }

export const addEventListeners = () => {

    const cards = document.querySelectorAll(".card-memory")
    const start = document.querySelector("#memory-empezar")
    const volver = document.querySelector("#memory-volver")
    volver.addEventListener("click",()=>initContent("hub"))
    start.addEventListener("click",startGame)
    for (let card of cards)
        card.addEventListener("click",selectCard,true) // Uso de useCapture - Duda
}    

const removeEventListeners = () => {

    const cards = document.querySelectorAll(".card-memory")
    for (let card of cards)
        card.removeEventListener("click",selectCard,true)
}

const selectCard = (e) => {
    
    let cardElement = e.target

    if(e.target.tagName ==="IMG")
        cardElement=cardElement.parentElement
   
    
    if(card1===undefined)
        {
            card1={
                id:cardElement.parentElement.parentElement.id,
                name:cardElement.parentElement.parentElement.dataset.function
            }
        }
    else if(card2===undefined)
        {
            card2={
                id:cardElement.parentElement.parentElement.id,
                name:cardElement.parentElement.parentElement.dataset.function            
            }

            isCorrectSelection(card1,card2)
        }

    // Damos la vuelta a la tarjeta
    

    if(cardElement.classList.contains('card-memory-content'))
        cardElement.parentElement.classList.add("selected")
    
    if(cardElement.classList.contains('card-memory-front'))
        cardElement.parentElement.parentElement.classList.add("selected")

    
    


}

const isCorrectSelection = (firstSelection,secondSelection) => {
    let attemps = document.querySelector("[data-function='attempts']")
    
    let score = document.querySelector("[data-function='score']")

    removeEventListeners()


    setTimeout(()=>{

        attemps.innerHTML++

    },1000)

    if(firstSelection.id === secondSelection.id)
        setTimeout(()=>{
            wrongSound()
            resetCards()
            addEventListeners()

        },1000)
    
    else if(firstSelection.name === secondSelection.name)
        setTimeout(()=>{
            succesSound()
            successCards()
            addEventListeners()
            score.innerHTML++
            isGameFinished()

        },1000)    
    else
    {
        setTimeout(()=>{
                wrongSound()
                resetCards()
                addEventListeners()
            
        },1000)                
    }

}

const resetCards = () => {

    const cards = document.querySelectorAll(".card-memory")
    card1=undefined
    card2=undefined
    for (let card of cards)
        card.classList.remove("selected")
}

const successCards = () => {
    const cards = document.querySelectorAll(".selected")
    for (let card of cards)
        {
            card.classList.remove("selected")
            card.classList.add("success")
            card.querySelector(".card-memory-back").querySelector("img").src="public/exercise-1/tick.svg"
        }

    card1=undefined
    card2=undefined
}

const succesSound = () => {
    const successSnd = new Audio("./public/exercise-1/sound/acierto.wav")
    successSnd.play()
    

}

const wrongSound = () => {
    const wrongSnd = new Audio("./public/exercise-1/sound/nope.wav")
    wrongSnd.play()

    setTimeout(() => {
        wrongSnd.play()
    },250)
}

const isGameFinished = () => {

    const cards = document.querySelectorAll(".card-memory")
    const successes = document.querySelectorAll(".success")

    console.log(successes.length)

    if(cards.length === successes.length)
        {
            for(let card of cards)
                party.confetti(card)

            setTimeout(()=>{
                modalGameOver()
            },1500)
            
        }

}

const modalGameOver = () => {
    let attemps = document.querySelector("[data-function='attempts']")
    
    let score = document.querySelector("[data-function='score']")
    
    document.querySelector("body").innerHTML+=`
    <div id="modal-memory" class="modal modal-show">
        <div class="modal-content">
            <h3>Congratulaciones!</h3>
            <h3 class="score">${attemps.innerHTML}</h3>
            <h4>${attemps.innerHTML > 6 ? '¡Vamos, seguro que puedes mejorarlo!' : '¡Perfecto! ¡Enhorabuena!'}</h4>
            <div>${Button('Volver','cerrar-modal-memory')}</div>
        </div>
        
        </div>
</body>`

let buttonModalClose = document.querySelector("#cerrar-modal-memory")
buttonModalClose.addEventListener("click",()=>{
    const modalMemory = document.querySelector("#modal-memory")
    const partyPop = document.querySelectorAll("#party-js-container")
    for (let party of partyPop)
        party.remove()
    modalMemory.remove()
    startGame()
})

}


export const memoryGame = () => `
        <h3>Score:<span data-function="score">0</span></h3>
        <h3>Attempts:<span data-function="attempts">0</span></h3>
        <div class="game-board">
            <div data-function="grid" class="b-grid"></div>
        </div>
        <div id="memory-botonera">${Button('Empezar','memory-empezar')}${Button('Volver','memory-volver')}</div>`