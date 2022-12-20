import { Hub } from "../pages/Hub/Hub"
import { addLoginEventListeners, Login } from "../pages/Login/Login"


const getNumber = () => `${Math.floor(Math.random()*255)}`

const randomColor = () => `
rgb(${getNumber()},${getNumber()},${getNumber()})
`



export const changeBackground = () => {
    document.body.style.backgroundColor=randomColor()
}

export const navigateTo = (navigation) => {
    const main = document.querySelector("main")
    switch(navigation) 
    {
        case "hub":
            main.innerHTML = Hub()
            break;
        case "login":
            main.innerHTML = Login()
            addLoginEventListeners()
            break;
    }

}







