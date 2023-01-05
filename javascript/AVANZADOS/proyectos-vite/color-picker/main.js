import './style.css'

const COLOR_PALETTE = {
  '#251101': 'Bistre',
  '#470024': 'Tyrian Purple',
  '#5B1865': 'Midnight',
  '#2C5784': 'Bdazzled Blue',
  '#5688C7': 'Glaucous'
}

const colorPicker = document.querySelector("#color-picker")
const colorTitle = document.querySelector("#color-name")
const inputColor = document.querySelector('#input-color')



const addOptionsToColorPicker = () => {
  
  Object.keys(COLOR_PALETTE).forEach((color) => {

    const opt = document.createElement("option") // creamos elemento option
    opt.value = color                           // asignamos a cada opcion el valor del elemento color
    opt.innerHTML=COLOR_PALETTE[color]          // el contenido del elemento opcion
  
    colorPicker.appendChild(opt)                // Colocamos cada OPT dentro del elemento colorPicker
  
  })

}

const addEventListenersToColorPicker = () => {

  const actualizaInputColor = (e) => {

    document.body.style.backgroundColor=e.target.value
    const colorTitleContent = `${COLOR_PALETTE[e.target.value]} - ${e.target.value}`
    colorTitle.innerHTML = COLOR_PALETTE[e.target.value] ? colorTitleContent : `${e.target.value}`

}

  colorPicker.addEventListener("change", actualizaInputColor)
  inputColor.addEventListener("input", actualizaInputColor)


}
addOptionsToColorPicker()
addEventListenersToColorPicker()

