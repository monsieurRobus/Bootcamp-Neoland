import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Search Users</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav