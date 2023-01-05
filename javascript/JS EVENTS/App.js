// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click


const button = document.querySelector("#btnToClick")
let evento = e => console.log(e)
let evento2 = e => console.log(e.target.value)

button.addEventListener("click",evento)




// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector(".focus")
focus.addEventListener("focus",evento2)


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputEl   = document.querySelectorAll("input")
inputEl.forEach(element=>element.addEventListener("input",evento2))