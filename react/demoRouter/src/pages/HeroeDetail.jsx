import React from 'react'

const HeroeDetail = ({heroe}) => {
    return (
        <div>
            <h1>name: {heroe.name}</h1>
            <p>alias: {heroe.alias}</p>
            <p>age: {heroe.age}</p>
        </div>
    )
}

export default HeroeDetail