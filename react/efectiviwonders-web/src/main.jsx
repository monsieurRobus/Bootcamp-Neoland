import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import NaP from './pages/NaP'
import SomosTuFestival from './pages/SomosTuFestival'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='/quienes-somos' element={<QuienesSomos />}/>
          <Route path='/somos-tu-festival' element={<SomosTuFestival />}/>          
          <Route path='/contacto' element={<Contacto />}/>
          <Route 
            path='*'
            element={
              <NaP />
            }
          />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
