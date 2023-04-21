import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'



const Dashboard = () => {

    const [user,login,logout] = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {

        if(!user) navigate("/", { replace: true })  
      
    },[user])

  return (
    <section>
        <h1>Dashboard</h1>
        <Outlet />
        <button onClick={logout}></button>
    </section>
  )
}

export default Dashboard