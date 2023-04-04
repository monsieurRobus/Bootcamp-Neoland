import React from 'react'
import FormElement from './FormElement'

const FormGenerator = (props) => {
    const   {
        data,
        formList,
        onSubmit
    } = props

const handlerSubmit = (e) => {
    e.preventDefault()
    const data = document.getElementsByTagName('input')
    const arrayData = Array.from(data).filter(input => input.type !== 'submit').map(input => input.value)    
    onSubmit(arrayData)
}

    return (
    <form onSubmit={handlerSubmit}>{
        formList.map((formElement, index) => 
            
            <FormElement key={index} data={formElement} index={index} type={formElement.inputType} />

        
        )
    }</form>
    )
}

export default FormGenerator