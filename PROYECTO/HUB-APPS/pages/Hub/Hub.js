import { addCardEventListener, cardDashboard as printCardTemplate } from '../../components/cardDashboard'

import { listGames } from '../../public/listGames'

import './Hub.css'

const getUser = () =>  window.localStorage.getItem('user')
const contenedorApps = document.querySelector("#contenedor-apps")

const printGames = () => {

    let list = ``

    for (let game of listGames){

        list+=printCardTemplate(game)  
    }

    return list

}


export const printTemplate = () => `
    <section id="hub">
        <div id="contenedor-apps">
            ${printGames()}
        </div>
    </section>
`
export const addCardEventListeners = () => {
    for (let game of listGames)
        addCardEventListener(game.name)
}



