import React, { useState } from 'react'
import FormGenerator from '../../../utils/FormGenerator'
import { loginFormList } from './loginFormList'

import '../../../models/users.json'
import axios from 'axios'
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

const LoginForm = () => {

    const {login,setLogin} = useState({})

  return (
    <div>
        <h1>gigger</h1>
        <h2>log in</h2>
        <FormGenerator formList={loginFormList} onSubmit={sendLogin} />
    </div>
  )
}

export default LoginForm