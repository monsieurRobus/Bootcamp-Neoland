import React, { useState, useContext, useEffect } from 'react'
import FormGenerator from '../../hooks/FormGenerator'
import { loginFormList } from './loginFormList'
import { Outlet, useNavigate } from "react-router-dom";

import '../../../models/users.json'
import axios from 'axios'
import { UserContext } from '../../../App';


const LoginForm = () => {

    let userLogged = window.localStorage.getItem('user')

    const [user,login] = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {

        if(user) navigate("/dashboard", { replace: true }) 


    },[user])

    return (
        <div>
        <h2>log in</h2>
            <FormGenerator formList={loginFormList} onSubmit={login} />
        </div>
    )
}

export default LoginForm