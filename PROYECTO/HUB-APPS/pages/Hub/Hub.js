import './Hub.css'

const getUser = () =>  window.localStorage.getItem('user')

export const Hub = () => `
    <section id="hub">
        <h2>¡Bienvenido, ${getUser()}!</h2>
        <div id="contenedor-apps">
        </div>
    </section>
`
const contenedorApps = document.querySelector("#contenedor-apps")

