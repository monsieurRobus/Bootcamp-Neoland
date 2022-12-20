import './css/style.css'
import { addHeaderEventListeners, Header } from './components/header'
import { changeBackground } from './utils/utils'
import { Footer } from './components/footer'
import { Hub } from './pages/Hub/Hub'
import { addLoginEventListeners, Login } from './pages/Login/Login'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Login()}
  </main>
  ${Footer()}
`

// AQUI METEMOS TB EVENT LISTENERS Y ROUTEO

addHeaderEventListeners()
addLoginEventListeners()