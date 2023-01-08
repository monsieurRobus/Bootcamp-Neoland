import { initContent } from "../../main"
import { Button } from "../button"
import './quizGame.css'




let numPregunta = 0
let preguntasJuego = []
let puntos = 0
let numeroPreguntas =10
let seleccionPregunta
let respuestaCorrecta

const getQuestions = async() => {
    const urlTrivia = 'https://opentdb.com/api.php?amount='
    puntos=0
    await fetch(urlTrivia+`${numeroPreguntas}`)
        .then(res => res.json())
        .then(res => drawQuestions(res.results))        
        // .catch(err => console.error(err))

}

const drawQuestions =  (questions) => {
    
    const gameBoard = document.querySelector('#gameboard')
    gameBoard.innerHTML=``
    numPregunta=1
    console.log(questions)
    preguntasJuego=[...questions]
    for (let question of questions) {
        
        let correcta = Math.floor(Math.random()*4)
        let respuestasIncorrectas = question.incorrect_answers
        let respuestaCorrecta = question.correct_answer
        let respuestas = []
        let respuestasTotal = question.type==="multiple" ? 4 : 2
        let contenidoDivRespuestas="";
        for (let i=0;i<respuestasTotal;i++)
        {   
            (correcta == i) ? respuestas[i]=question.correct_answer : respuestas[i]=respuestasIncorrectas.pop()
            contenidoDivRespuestas+=`<button id="pregunta${numPregunta}-opcion1" class="answer">${respuestas[i]}</button>`

        }

        gameBoard.innerHTML+=`
        <div id="pregunta${numPregunta}" class="question">
            <h2>${numPregunta++}</h2>
            <h3>${question.question}</h3>
            <div id="pregunta${numPregunta}-opciones" class="opciones">${contenidoDivRespuestas}</div>
            </div>`
        
    }
    eventListeners()

}

const startGame = () =>  {
    puntos=0
    numPregunta=0
    getQuestions()

}

export const eventListeners = () => {
    
    
    const checkGame = document.querySelector('#check-game')
    const respuestas = document.querySelectorAll(".answer")    
    const start = document.querySelector("#quiz-empezar")
    const volver = document.querySelector("#quiz-volver")

    checkGame.addEventListener('click',checkGameAnswers)
    start.addEventListener("click",startGame)
    volver.addEventListener("click",()=>initContent("hub"))

    for (let respuesta of respuestas)
        respuesta.addEventListener("click",marcarRespuesta)

}

const marcarRespuesta = (event) => {

    event.target.classList.add('select')
    const elementosHermanosPregunta = event.target.parentElement.children
    quitarEventListeners(elementosHermanosPregunta)

}

const quitarEventListeners = (elementos) => {
    
    for (let elemento of elementos)
        elemento.removeEventListener("click", marcarRespuesta)

}

const checkGameAnswers = () => {
    // No inlcuyo ninguna pista de la respuesta correcta en el elemento
    
    const preguntas = document.querySelectorAll('.question')
    const numPreguntas = preguntas.length
    let opciones;
    
    for(let i=0;i<numPreguntas;i++)
        {
        seleccionPregunta= preguntas[i].querySelector(".opciones").querySelector(".answer").innerHTML
        respuestaCorrecta= preguntasJuego[i].correct_answer
        if(seleccionPregunta === respuestaCorrecta)
            puntos+=1
        }
        
    drawResults(puntos)
}


const drawResults = (cantidad) => {
    
    const gameBoard = document.querySelector('#gameboard')
    gameBoard.innerHTML=`
    <div class="score">
        <h2>Your score is:</h2>
        <h3>${cantidad}</h3>
    </div>
    `
}



export const quizGame = () => `<section id="quizSection">
    <div id="header-botonera">${Button('Check game','check-game')}</div>
    <div id="gameboard">

    </div>
    <div id="quiz-botonera">${Button('Empezar','quiz-empezar')}${Button('Volver','quiz-volver')}</div>
</section>`