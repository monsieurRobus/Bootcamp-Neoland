import { logOut } from "../pages/Login/Login"
import { changeBackground } from "../utils/utils"
import { Button } from "./button"
import { Title } from "./title"

export const Header = () => `
    <header>
        ${Title()}
        ${Button('Coloreame!',"change-color")}
        ${Button('Log Out','logout')}
    </header>
`


export const addHeaderEventListeners = () => {
    
    const header = document.querySelector("header")
    const buttons = header.querySelectorAll("button")

for (let button of buttons)
    {
    switch(button.id) {
        case 'change-color':
            button.addEventListener('click', ()=>{changeBackground()})
        break;
        case 'logout':
            button.addEventListener('click', ()=>{logOut()})
        break;
    }
    }

}