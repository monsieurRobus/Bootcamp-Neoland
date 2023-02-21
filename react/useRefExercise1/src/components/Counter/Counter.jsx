import React, { useState, useEffect, useRef} from 'react'

const Counter = () => {

    const timer = useRef(0)
    
    const [cont, setCont] = useState(0)

    useEffect(()=>{

        timer.current = setInterval(c => c+1,1000)

    },[])
    
        const handleClick = () => { 
            clearInterval(timer.current) 
            timer.current=0
        }


  return (
    <div>
        <h1>Counter {cont}</h1>
        <button onClick={handleClick}>Para, imbecil</button>
    </div>
  )
}

export default Counter