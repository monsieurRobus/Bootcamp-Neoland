import './css/style.css'
import { addHeaderEventListeners, Header } from './components/header'
import { Footer } from './components/footer'
import { addCardEventListeners, printTemplate as printHubTemplate } from './pages/Hub/Hub'
import { addLoginEventListeners, printTemplate as printLoginTemplate } from './pages/Login/Login'
import { whackAMole as printWhackAMoleTemplate, addWhackEventListeners } from './components/whackAMole/whackAMole'
import { ticTacToe as printTicTacToe, addTicTacToeListeners } from './components/ticTacToe/ticTacToe'


document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
  </main>
  ${Footer()}
`

export const initContent = (navigation) => {
  const main = document.querySelector("main")
  switch(navigation) 
  {
      case "whackAMole":
          main.innerHTML = printWhackAMoleTemplate()
          addWhackEventListeners()
          console.log("test")
        break;
      case "pokeApi":
          main.innerHTML = printPokeApiTemplate()
        break;
      case "ticTacToe":
          main.innerHTML = printTicTacToe()
        break;
      case "hub":
          main.innerHTML = printHubTemplate()
          addCardEventListeners()
        break;
      case undefined:
          main.innerHTML = printLoginTemplate()
          addLoginEventListeners()
          
        break;
      
  }

}

// AQUI METEMOS TB EVENT LISTENERS Y ROUTEO

addHeaderEventListeners()
initContent(undefined)