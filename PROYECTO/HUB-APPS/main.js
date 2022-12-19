import './css/style.css'
import { Header } from './components/header'
import { changeBackground } from './utils/utils'
import { Footer } from './components/footer'
import { Hub } from './pages/Hub/Hub'
import { Login } from './pages/Login/Login'


const pageStorage = window.localStorage;
let user = pageStorage.user


document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Login()}
  </main>
  ${Footer()}
`

// AQUI METEMOS TB EVENT LISTENERS Y ROUTEO

  const addHeaderEventListeners = () => {
  const header = document.querySelector("header")
  const buttons = header.querySelectorAll("button")

  for (let button of buttons)
    {
      switch(button.id) {
        case 'change-color':
            button.addEventListener('click', ()=>{changeBackground()})
          break;
        case 'logout':
            button.addEventListener('click', ()=>{alert("LOGAUT!")})
          break;
      }
    }

}

const addLoginEventListeners = () => {

  const main = document.querySelector("main")
  const button = main.querySelectorAll("button")
  button[0].addEventListener('click', () => userLogin())

}

const userLogin = () => {

  const userLogin = document.querySelector('#nameLogin')
  userLogin.value == '' ? invalidUsername() :  pageStorage.setItem('user',userLogin.value)

}

const invalidUsername = () => {

  const main = document.querySelector("main")
  const message = document.createElement('h2').innerHTML=(document.createTextNode("Usuario no válido"))
console.log(message)
  main.appendChild(message)
  

}


addHeaderEventListeners()
addLoginEventListeners()