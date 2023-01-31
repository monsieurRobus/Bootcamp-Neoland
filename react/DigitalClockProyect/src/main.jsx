import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchUsers from './components/SearchUsers/SearchUsers'
import Contact from './components/Contact/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes >
        <Route path="/" element={<App/>} >
          <Route path="/search-users" element={<SearchUsers/>}/>        
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*"
              element={
                <main>
                  <h1>Ni idea bro</h1>
                </main>
              } />
          </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
