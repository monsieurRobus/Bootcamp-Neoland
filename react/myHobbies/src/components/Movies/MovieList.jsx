import React from 'react'
import Movie from './Movie'

import './movies.css'

import './'

const MovieList = ({data}) => {
    return (
        <section>
            <h1>Movies I like 💖</h1>
            <div className="movies">
                {
                    (data.map((movie,index)=> {
                        return <Movie key={index} type={movie.type} genre={movie.genre} name={movie.name} vote={movie.vote} /> 
                    }))
                }
            </div>
        </section>
    )
}

export default MovieList