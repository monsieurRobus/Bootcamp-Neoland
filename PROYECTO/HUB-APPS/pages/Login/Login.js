import { initContent } from '../../main'
import { writeUserName } from '../../utils/utils'

import './Login.css'

const pageStorage = window.localStorage



export const addLoginEventListeners = () => {

    const main = document.querySelector("main")
    const button = main.querySelectorAll("button")
    button[0].addEventListener('click', () => userLogin())

}

export const userLogin = () => {

    const user = document.querySelector('#nameLogin')
    user.value == '' ? invalidUsername() :  
        (user.value.toLowerCase() == 'carlos') ? loginSuccess(user.value+"🎉") : loginSuccess(user.value) 

}

const invalidUsername = () => {

    const message =document.querySelector("#invalid-username-message")
    if(message)
        message.remove()

    document.querySelector("main").innerHTML+=`<h2 class="warning" id="invalid-username-message">Usuario no válido</h2>`
    addLoginEventListeners()
}

const loginSuccess = (username) =>{

    const logoutButton = document.querySelector("#logout")
    const loginElement = document.querySelector("#login")
    pageStorage.setItem('user',username)
    const name = document.querySelector("#user-name")
    name.innerHTML = writeUserName()    
    initContent("hub")
    loginElement.remove()
    logoutButton.classList.remove('oculto')

}

export const logOut = () => {

    const logoutButton = document.querySelector("#logout")
    const main = document.querySelector("main")
    const userName = document.querySelector("#user-name")
    initContent(undefined)
    pageStorage.removeItem('user')
    userName.innerHTML = ''
    logoutButton.classList.add('oculto')
}

export const printTemplate = () => `
<section id="login">
    <h2>¡Hola! uwu</h2>
    <h3>¿Cómo te llamas?🤔</h3>

    <div>
        <input id="nameLogin" ></input><button>➡️</button>
    </div>
</section>`