import React from 'react'
import { songFormList } from './SongFormlist'
import {formTypes} from '../../../config/formTypes'
import './SongForm.css'
import LyricsEditor from '../../molecule/LyricsEditor'



const SongForm = () => {
const songFormGenerator = () => {
    return songFormList.map((formElement, index) => {
        
        switch (formElement.inputType) {
            case formTypes.TEXT:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            type="text"
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                            value={formElement.value}
                        />
                    </div>
                )
            case formTypes.TAGS_STYLES:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            type="text"
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                            value={formElement.value}
                        />
                    </div>
                )
            case formTypes.TIME:
                return (
                    <div key={index}>
                        <label>{formElement.name}</label>
                        <input
                            type='time'
                            placeholder={formElement.placeholder}
                            required={formElement.required}
                            value={formElement.value}
                        />
                    </div>
                )
                
            case formTypes.SUBMIT:
                return (
                    <div key={index}>
                        <input
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
}
    return (
        <form className="song-form-wrapper">
            <section className="input-fields">
                {songFormGenerator()}
            </section>
            <section className="input-lyrics">
                <LyricsEditor />
            </section>
            
        </form>
    )
}

export default SongForm