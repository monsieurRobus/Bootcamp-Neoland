import './Hub.css'

const getUser = () =>  window.localStorage.getItem('user')

export const Hub = () => `
    <section>
        <h2>¡Bienvenido, ${getUser()}!</h2>
    </section>
`

