import React, { useState } from 'react'
import FormGenerator from '../../../utils/FormGenerator'
import { loginFormList } from './loginFormList'
import { useNavigate } from "react-router-dom";

import '../../../models/users.json'
import axios from 'axios'


const LoginForm = () => {
    const navigate = useNavigate()
    const {login,setLogin} = useState({})
    let userLogged = window.localStorage.getItem('user')

    const sendLogin = (login) => {
    
        const [username, password] = login
        axios.get('http://localhost:3000/users')
            .then(res => {
                res.data.forEach(user => {
                    if(user.username === username && user.password === password){
                        window.localStorage.setItem('user', JSON.stringify(user.username))
                        
                    }
                }
            )
            })       
            console.log(username, password)        
    }

    return (
        <div>
            <h1>gigger</h1>
            <h2>log in</h2>
            {userLogged===null ? <FormGenerator formList={loginFormList} onSubmit={sendLogin} /> : alert("logeao")}
        </div>
    )
}

export default LoginForm