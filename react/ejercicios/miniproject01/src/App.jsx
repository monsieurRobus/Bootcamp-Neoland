import { useState } from 'react'
import { charactersMock } from '../../data/charactersmock'
import './App.css'

const App=  () => {
  const [characters, setCharacters] = useState(charactersMock)


  return (

    <div className="App">
    {
      characters.map((character=> (
        <div key={character.id}>
          <h2>{character.id}. {character.name}</h2>
          <p>Está: {character.status}</p> 
        </div>
      )
        ))
    
    }
    </div>
  )
}

export default App
