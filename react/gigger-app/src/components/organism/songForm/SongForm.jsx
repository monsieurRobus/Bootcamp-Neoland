import React, { useState } from 'react'
import './testeoApi.js'
import { songFormList } from './SongFormlist'
import {formTypes} from '../../../config/formTypes'
import './SongForm.css'
import LyricsEditor from '../../molecule/LyricsEditor'
import FormGenerator from '../../hooks/FormGenerator'

const handleSubmit = (e) => {

    

}

const SongForm = () => {

    const [data,setData] = useState({})

    return (
        <form className="song-form-wrapper">
            <section className="input-fields">
                <FormGenerator formList={songFormList} data={data} setData={setData} />
            </section>
            <section className="input-lyrics">
                <LyricsEditor data={data} setData= {setData}/>
            </section>
            
        </form>
    )
}

export default SongForm