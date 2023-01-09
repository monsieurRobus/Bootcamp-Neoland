import './css/style.css'
import { addHeaderEventListeners, Header } from './components/header'
import { Footer } from './components/footer'
import { addCardEventListeners, printTemplate as printHubTemplate } from './pages/Hub/Hub'
import { addLoginEventListeners, printTemplate as printLoginTemplate } from './pages/Login/Login'
import { whackAMole as printWhackAMoleTemplate, addWhackEventListeners } from './components/whackAMole/whackAMole'
import { ticTacToe as printTicTacToe, addTicTacToeListeners } from './components/ticTacToe/ticTacToe'
import { quizGame as printQuizGame, eventListeners as addQuizEventListeners } from './components/quizGame/quizGame'
import { memoryGame as printMemoryGame, addEventListeners as addMemoryGameListeners} from './components/memoryGame/memoryGame'
import { getPokemon,addEventListeners as addPokeApiEventListeners, pokeApi as printPokeApiTemplate } from './components/pokeApi/pokeApi'


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
        break;
      case "pokeApi":
          main.innerHTML = printPokeApiTemplate()
          getPokemon()
          addPokeApiEventListeners()
        break;
      case "ticTacToe":
          main.innerHTML = printTicTacToe()
          addTicTacToeListeners()
        break;
      case "memoryGame":
          main.innerHTML = printMemoryGame()
          addMemoryGameListeners()
        break;
      case "hub":
          main.innerHTML = printHubTemplate()
          addCardEventListeners()
        break;
      case "quizGame":
          main.innerHTML = printQuizGame()
          addQuizEventListeners()
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