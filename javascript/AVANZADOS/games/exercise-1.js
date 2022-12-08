let cardArray = [
{
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
},
{
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
},
{
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
},
{
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
},
{
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
},
{
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
},
{
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
},
{
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
},
{
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
},
{
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
},
{
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
},
{
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
},
]

const gridCards = document.querySelector("[data-function='grid']")
const score = document.querySelector("[data-function='score']")
const attemps = document.querySelector("[data-function='attempts']")
let card1;
let card2;

const startGame = () => {

    for (carta of cardArray)
        gridCards.innerHTML+=`
        <figure id="${carta.id}" class="card" data-function="${carta.name}">
            <div class="card-content">
                <div class="card-front">
                a    
                </div>
                <div class="card-back">
                    <img src="${carta.img}"/>
                </div>
            </div>
        </figure>
        `
    }

const addEventListeners = () => {

    const cards = document.querySelectorAll(".card")

    for (card of cards)
        card.addEventListener("click",selectCard,true) // Uso de useCapture - Duda
}    

const selectCard = (e) => {
    
    let cardElement = e.target
    console.log(card1)
    console.log(card2)
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
    

    if(cardElement.classList.contains('card-content'))
        cardElement.parentElement.classList.add("selected")

    if(cardElement.classList.contains('card-front'))
        cardElement.parentElement.parentElement.classList.add("selected")

    
    


}

const isCorrectSelection = (firstSelection,secondSelection) => {

    if(firstSelection.id === secondSelection.id)
        console.log("Es la misma tarjeta")
    
    else if(firstSelection.name === secondSelection.name)
        console.log("DE PUTA MADRE BRO")

}

const resetCards = () => {

    const cards = document.querySelectorAll(".card")
    card1=undefined
    card2=undefined
    for (card of cards)
        card.classList.remove("selected")
}

startGame()
addEventListeners()

