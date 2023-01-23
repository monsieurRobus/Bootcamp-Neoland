import { useState } from 'react'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <header>
      <h1>Router pa el mesié</h1>
    </header>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="heroes">Heroes</NavLink>
        <NavLink to="About">About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
    </div>
  )
}

export default App
