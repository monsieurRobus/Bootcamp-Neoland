import formTypes from "../../../config/formTypes";

export const loginFormList = [
    {
        id: 'username',
        name: 'User Name',
        inputType: formTypes.TEXT,
        required: true
    },
    {
        id: 'password',
        name: 'Password',
        inputType: formTypes.PASSWORD,
        required: true
    },
    {
        id: 'submit-button',
        name: 'Log in',
        inputType: formTypes.SUBMIT,
        required: true

    }
]