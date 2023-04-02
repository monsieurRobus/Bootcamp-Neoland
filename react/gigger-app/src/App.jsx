import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/organism/LoginForm/LoginForm'
import SongForm from './components/organism/songForm/SongForm'



function App() {

 // Hacer luego esto uwu

  return (
    <Routes>
        <Route path="/" element={<LoginForm />}>
          <Route path="login" element={<h1>404</h1>} />
        </Route>

        <Route path="/dashboard"element={<h1>Dashboard</h1>}>
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="events" element={<h1>Events</h1>} />
        </Route>

    </Routes>
  )
}

export default App
