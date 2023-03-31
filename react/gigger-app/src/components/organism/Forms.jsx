import React from 'react'
import { useForm } from 'react-hook-form'


const Forms = ({data}) => {
    const { handleSubmit, register, errors } = useForm()

    const formRenderer = (item,index) => {

        switch(item.type) {
            case "text":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        <input
                            name={item.name}
                            type={item.type}
                        />
                    </div>
                )
            case "textarea":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        <textarea
                            name={item.name}
                            type={item.type}
                            rows={item.config.rows}
                            cols={item.config.cols}
                        />
                    </div>
                )
            case "number":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        <input
                            name={item.name}
                            type={item.type}
                        />
                    </div>
                )
            case "select":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        <select
                            name={item.name}
                        >
                            <option value="">Select an option</option>
                            {item.options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )
            case "radio":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        {item.options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type={item.type}
                                    name={item.name}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                )
            case "checkbox":
                return (
                    <div key={index}>
                        <label>{item.label}</label>
                        {item.options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type={item.type}
                                    name={item.name}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                )
            default:
                return null
        }

    }

    const onSubmit = () => {}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {data.map((item, index) => (
                formRenderer(item,index)
            ))}
            <button type="submit">Submit</button>
        </form>
    )   
}

export default Forms