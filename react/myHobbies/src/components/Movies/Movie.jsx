import React from 'react'

const Movie = ({name,type,genre,vote}) => {
  return (
    <div className="movie">
        <h2>{name}</h2>
        <h3>{type}</h3>
        <h4>{genre}</h4>
        <h4>{vote}</h4>
    </div>
  )
}

export default Movie