import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import MensajePrevio from './components/MensajePrevio/MensajePrevio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MensajePrevio />
    </div>
  )
}

export default App
