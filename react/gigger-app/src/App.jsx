import axios from 'axios'
import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import HomeSelector from './components/organism/HomeSelector/HomeSelector'
import LoginForm from './components/organism/LoginForm/LoginForm'
import RegisterForm from './components/organism/RegisterForm/RegisterForm'
import Dashboard from './pages/Dashboard/Dashboard'
import Page404 from './pages/Page404/Page404'



export const UserContext = createContext()

function App() {
  
  const navigate = useNavigate()

  const [user, setUser] = useState(()=>{
    try {
      const value = JSON.parse(window.localStorage.getItem('user'))
      if (value) return JSON.parse(value)
      else {
        return null
      }

    }
    catch(err) {
      return null
    }
  })

  const login = (credentials) => {
    const [username, password] = credentials
    axios.get('http://localhost:3000/users')
        .then(res => {
            res.data.forEach(user => {
                if(user.username === username && user.password === password){
                    window.localStorage.setItem('user', JSON.stringify(user.username))
                    setUser(username)
                }
                
            }
        )
        })       
        console.log(username, password)        
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={[user,login,logout]}>
      <Routes>
          <Route element={<HomeSelector />}>          
            <Route path="/"  element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route path="/dashboard"element={<Dashboard />}>
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="events" element={<h1>Events</h1>} />
          </Route>

          <Route path="*" element={<Page404/>} />

      </Routes>
    </UserContext.Provider>
  )
}

export default App
