import React from 'react'
import formTypes from '../config/formTypes'
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
        formList.map((formElement, index) => {
            
            switch (formElement.inputType) {
            case formTypes.TEXT:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            id={`input-${formElement.id}-${formElement.inputType}`}
                            type="text"
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                        />
                    </div>
                )
            case formTypes.PASSWORD:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            id={`input-${formElement.id}-${formElement.inputType}`}
                            type="password"
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                        />
                    </div>
                )
                                
            case formTypes.TAGS_STYLES:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            id={`input-${formElement.id}-${formElement.inputType}`}
                            type="text"
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                        />
                    </div>
                )
            case formTypes.TIME:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            id={`input-${formElement.id}-${formElement.inputType}`}
                            type='time'
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                        />
                    </div>
                )
                
            case formTypes.SUBMIT:
                return (
                    <div key={index}>
                        <input
                            id={`input-${formElement.id}-${formElement.inputType}`}
                            type="submit"
                            value={formElement.name}
                            required={formElement.required}
                        />  
                    </div>
                )

            default:
                return null
        }
    
        
        })
    }</form>
  )
}

export default FormGenerator