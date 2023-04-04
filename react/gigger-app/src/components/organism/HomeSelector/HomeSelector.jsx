import React, { useState, useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './../../../App'

const HomeSelector = () => {


  return (
        <div>
            <h1>gigger</h1>        
            <Outlet />
        </div>
  )
}

export default HomeSelector