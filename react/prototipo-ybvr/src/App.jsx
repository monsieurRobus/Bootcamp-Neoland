import { useState } from 'react'
import './App.css'
import MainSection from './components/mainSection/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainSection />
    </div>
  )
}

export default App
