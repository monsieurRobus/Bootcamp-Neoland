import React from 'react'

const useLocalStorage = (keyValue,defaultValue) => {
    const   [storedValue, setStoredValue] = useState(null)
    try {
        const item = window.localStorage.getItem(keyValue)
        if(item) {
            return JSON.parse(item)
        }
        else {
            window.localStorage.setItem(keyValue, JSON.stringify(defaultValue))
            return defaultValue
        }
    }
    catch (error) {
        return defaultValue
    }
    const setValue = (newValue) => {
        try{
            windows.localStorage.setItem(keyValue, JSON.stringify(newValue))
        }
        catch {}
        setStoredValue(newValue)
    }
    
    return [storedValue, setValue]
}


export default useLocalStorage