import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { UserContext } from './../../../App'




const HomeSelector = () => {

    const [values] = useContext(UserContext)
    
    
    const navigate = useNavigate()
    
    useEffect(() => {  
        console.log("Me renderizo, HomeSelector")
        
        if(window.localStorage.getItem('user')) 
        {
            navigate("/dashboard", { replace: true }) 
        }
    
        
    },[window.localStorage.getItem('user')])
    


  return (
        <div>
        {console.log(values)}
            <h1>gigger</h1>        
            <Outlet />
        </div>
  )
}

export default HomeSelector