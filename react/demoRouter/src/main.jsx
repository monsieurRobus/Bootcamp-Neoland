import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './pages/Home'
import Heroe from './pages/Heroe'
import Heroes from './pages/Heroes'
import About from './pages/About'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="/heroe/:id" element={<Heroe /> } />
        <Route path="/about" element={<About />} />
        <Route path="*" 
                element={
                  <main>
                    <p>404 - Que ise loco, no esite la ruta</p>
                  </main>
                } />
      </Route>
    </Routes>  
  </BrowserRouter>     
  
  </React.StrictMode>,
)
