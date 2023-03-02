import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Aside.css'
// import './../../models/setlist.json'

const handleClose = (e) => {

  console.log(e.target.parentElement.classList.toggle('menuabre'))

}

const Aside = () => {
  return (
    <aside>
      <button className={'botonprueba'} onClick={handleClose}>X</button>
      {/* <Link to={`/setlist/${}`}>Setlists</Link>  */}
      
    </aside>
  )
}

export default Aside