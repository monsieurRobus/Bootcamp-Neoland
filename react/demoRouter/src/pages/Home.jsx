import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section>
        <h2>Esta es la página Home</h2>
            <ul>
                <li>Puedes visitar La pagina de <Link to="heroes">Heroes</Link></li>
                <li> </li>
            </ul>



    </section>
  )
}

export default Home