import './css/style.css'
import { Header } from './components/header'
import { changeBackground } from './utils/utils'
import { Footer } from './components/footer'
import { Hub } from './pages/Hub/Hub'

const pageStorage = window.localStorage;


document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
  </main>
  ${Footer()}
`

// AQUI METEMOS TB EVENT LISTENERS Y ROUTEO

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
          button.addEventListener('click', ()=>{alert("LOGAUT!")})
          break;
      }
    }

}

const itemSelector = (navigate) => {

switch (navigate) {
  case undefined: 
  break
}


}

addHeaderEventListeners()