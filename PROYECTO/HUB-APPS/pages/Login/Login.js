import { navigateTo } from '../../utils/utils'
import './Login.css'

const pageStorage = window.localStorage

export const Login = () => `
<section id="login">
    <h2>¡Hola! uwu</h2>
    <h3>¿Cómo te llamas?🤔</h3>
    <div>
        <input id="nameLogin" ></input><button>➡️</button>
    </div>
</section>`

export const addLoginEventListeners = () => {

    const main = document.querySelector("main")
    const button = main.querySelectorAll("button")
    button[0].addEventListener('click', () => userLogin())

}

export const userLogin = () => {

    const user = document.querySelector('#nameLogin')
    user.value == '' ? invalidUsername() :  storeUsername(user.value) 

}

const invalidUsername = () => {

    const message =document.querySelector("#invalid-username-message")
    if(message)
        message.remove()

    document.querySelector("main").innerHTML+=`<h2 class="warning" id="invalid-username-message">Usuario no válido</h2>`
    addLoginEventListeners()
}

const storeUsername = (username) =>{
    const loginElement = document.querySelector("#login")
    pageStorage.setItem('user',username)
    navigateTo("hub")
    loginElement.remove()

}

export const logOut = () => {

    const main = document.querySelector("main")
    navigateTo("login")
    pageStorage.removeItem('user')

}
