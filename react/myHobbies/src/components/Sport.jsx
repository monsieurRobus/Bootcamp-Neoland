import React from 'react'
import './sports.css'

const Sport = ({data}) => {
    return (
        <figure className="sport">
            <h3>{data.name}</h3>
            <ul>
                <li>{data.favoriteTeam}</li>
                <li>{data.indoor ? 'Indoor sport': 'NOPE'}</li>
            </ul>
        </figure>
    );
}

export default Sport;
