const getNumber = () => `${Math.floor(Math.random()*255)}`

const randomColor = () => `rgb(${getNumber()},${getNumber()},${getNumber()})`

export const writeUserName = () => 
    `<h1>Bienvenido, ${window.localStorage.getItem("user")}</h1>`
    
export const changeBackground = () => {
    document.body.style.backgroundColor=randomColor()
}