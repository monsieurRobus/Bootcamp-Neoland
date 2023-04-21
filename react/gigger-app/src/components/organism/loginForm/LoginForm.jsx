import React, { useContext, useEffect } from 'react'
import FormGenerator from '../../hooks/FormGenerator'
import { loginFormList } from './loginFormList'
import { useNavigate } from "react-router-dom";

import '../../../models/users.json'

import { UserContext } from '../../../App';


const LoginForm = () => {

    const [user,login] = useContext(UserContext)

    return (
        <div>
        <h2>log in</h2>
            <FormGenerator formList={loginFormList} onSubmit={login} />
        </div>
    )
}

export default LoginForm