import React from 'react'
import './Aside.css'


const handleClose = (e) => {

  console.log(e.target.parentElement.classList.toggle('menuabre'))

}

const Aside = () => {
  return (
    <aside>
      <button className={'botonprueba'} onClick={handleClose}>X</button>
    </aside>
  )
}

export default Aside