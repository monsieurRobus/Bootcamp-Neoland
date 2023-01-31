import React from 'react'

import { useState, useEffect } from 'react'

const InputCard = () => {

    const [input,setInput] = useState('a')
    const [message,setMessage] = useState([])
    const [disabledInput,setDisabled] = useState(false)
    const handleInput = (e) => {
        const inputValue = e.target.value
        setInput(inputValue)
    }
    

    const handleClick = () => {
        setMessage([...message,input])
    }


    useEffect(() => {

        
        let characters = input.length
    
        if (characters <= 280){
            document.title = `te quedan ${280-characters}`
            setDisabled(false)
        }
        else   
            setDisabled(true)
        
    
    
    }, [input]);

    return (
        <section>
            <h1>Vamo a programá</h1>
            <div>
                <textarea disabled={disabledInput} placeholder="Inserta mensaje mi amol" onChange={handleInput}></textarea>
            </div>
            <div>{ input.length >0 && <button onClick={handleClick}>Enviar</button> }

                {message.map((msn)=> (
                    <p>{msn}</p>
                ))}
            </div>
        </section>
    )
}


export default InputCard