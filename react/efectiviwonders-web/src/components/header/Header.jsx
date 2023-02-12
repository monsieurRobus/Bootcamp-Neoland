import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <header><h2>Estamos ruteando, pa!</h2>
        <nav className="nav-menu">
            <NavLink className='menu-item' to=''>Home</NavLink>
            <NavLink className='menu-item' to='quienes-somos'>Quienes Somos</NavLink>
            <NavLink className='menu-item' to='somos-tu-festival'>Somos Tu Festival</NavLink>
            <NavLink className='menu-item' to='contacto'>Contacto</NavLink>
        </nav>
        <div class='nav-menu-hamburguer'>
            <div className='nav-menu-hamburger-elements'></div>
            <div className='nav-menu-hamburger-elements'></div>
            <div className='nav-menu-hamburger-elements'></div>
        </div>
    </header>
  )
}

export default Header