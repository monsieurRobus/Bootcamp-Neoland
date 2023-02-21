import { useState, useEffect } from 'react'
import React from 'react'

    

const StopWatch = () => {
    
    const [ time, setTime ] = useState(0)
    const [ timerOn, setTimerOn ] = useState(false)
    let interval = null

    useEffect(() => {

        
        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
            interval = null
        }

        return () => clearInterval(interval)
        
    },[timerOn])

    return (
        <div className="stopwatch">
            <div>
                <span>{("0" + Math.floor((time/ 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/ 1000) % 60)).slice(-2)}</span>
                <span>{("0" + ((time/10) % 100).slice(-2))}</span>
            </div>
            <button onClick={() => setTimerOn(true)}>Start</button>
            <button onClick={() => setTimerOn(false)}>Stop</button>
            <button onClick={() => setTimerOn(true)}>Resume</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    )
}

export default StopWatch