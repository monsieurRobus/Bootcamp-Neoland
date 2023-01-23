import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeroeDetail from './HeroeDetail'
import { getHeroes } from '../data/data'
const Heroes = () => {
  
    const heroes = getHeroes()
    return (
    
    <section>
        <h2>Sección to guapa de Heroes</h2>
        <ul>
            {
                heroes.map(heroe => <li>
                    <Link to={`/heroe/${heroe.id}`}>
                        <HeroeDetail heroe={heroe} />
                    </Link>
                </li>)
            
            }
        </ul>
        <Outlet />
    </section>
    
  )
}

export default Heroes