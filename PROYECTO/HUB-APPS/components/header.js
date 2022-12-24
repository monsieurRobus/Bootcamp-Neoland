import { logOut } from "../pages/Login/Login"
import { changeBackground } from "../utils/utils"
import { Button } from "./button"

export const Header = () => `
    <header>
        <div>${Button('Coloreame!',"change-color")}</div>
        <div id="user-name"></div>
        <div >${Button('Log Out','logout')}</div>                
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