import React,{useEffect, useState, useRef} from 'react'

    
const MensajePrevio = () => {

    
    const [mensaje,setMensaje] = useState('')
    const prevMensaje = useRef('')

    const handleChange = (e) => {
        console.log('está cambiando el input')
        setMensaje(e.target.value)
    }

    useEffect(()=>{
        prevMensaje.current=mensaje
        console.log('estoy actualizando la referencia uwu')
    },[mensaje])

   

  return (
    <div>
        <input type="text" onChange={handleChange} />
        <p>MensajePrevio: {mensaje}</p>
        <p>Ref: {prevMensaje.current}</p>
    </div>
  )
}

export default MensajePrevio