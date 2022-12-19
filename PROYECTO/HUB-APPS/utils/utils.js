const getNumber = () => `${Math.floor(Math.random()*255)}`

const randomColor = () => `
rgb(${getNumber()},${getNumber()},${getNumber()})
`

export const changeBackground = () => {
    document.body.style.backgroundColor=randomColor()
}