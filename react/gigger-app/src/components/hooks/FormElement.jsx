import React from 'react'
import formTypes from '../../config/formTypes'

const FormElement = ({index,data,type}) => {
    
    return (
        <div key={index}>
            { type!==formTypes.SUBMIT ? <label>{data.name}</label> : null }
            <input
                id={`input-${data.id}-${data.inputType}`}
                type={type}
                placeholder={data.placeholder}
                required={data.required}
            />
        </div>
    )
}

export default FormElement