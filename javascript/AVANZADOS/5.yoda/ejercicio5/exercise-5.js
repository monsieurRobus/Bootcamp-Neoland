const urlTrivia = 'https://opentdb.com/api.php?amount='
const numeroPreguntas = document.querySelector('input[data-function="questions-number"]')

const gameBoard = document.querySelector('[data-function="gameboard"]')
const startGame = document.querySelector('[data-function="start-game"]')
const checkGame = document.querySelector('[data-function="check-game"]')
let numPregunta = 0
let preguntasJuego = []
let puntos = 0

const getQuestions = async() => {
    puntos=0
    await fetch(urlTrivia+`${numeroPreguntas.value}`)
        .then(res => res.json())
        .then(res => drawQuestions(res.results))        
        .catch(err => console.error(err))

}

const drawQuestions =  (questions) => {
    gameBoard.innerHTML=``
    numPregunta=1
    preguntasJuego=[...questions]
    console.log(questions)
    for (question of questions) {
        
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

const eventListeners = () => {

    const respuestas = document.querySelectorAll(".answer")
    for (respuesta of respuestas)
        respuesta.addEventListener("click",marcarRespuesta)

}

const marcarRespuesta = (event) => {

    event.target.classList.add('select')
    const elementosHermanosPregunta = event.target.parentElement.children
    quitarEventListeners(elementosHermanosPregunta)

}

const quitarEventListeners = (elementos) => {
    
    for (elemento of elementos)
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

    gameBoard.innerHTML=`
    <div class="score">
        <h2>Your score is:</h2>
        <h3>${cantidad}</h3>
    </div>
    `
}

startGame.addEventListener('click',getQuestions)
checkGame.addEventListener('click',checkGameAnswers)
