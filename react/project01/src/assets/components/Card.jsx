import { useState, useEffect } from 'react';

export const Card = (props) => {
    const {character} = props;
    return (
        <div id={character.id}>
            <h1>{character.name}</h1>
            <h2>{character.location.name}</h2>
            <img src={character.image} />
            
        </div>
    );
}

export default Card;
