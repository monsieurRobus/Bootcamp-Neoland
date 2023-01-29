import { useState, useEffect } from 'react';
import { rickymorty } from '../data/dataUrls';
import { Card } from './Card';

export const CardList = () => {
    const [characters, setCharacters] = useState([])
    

    useEffect(() => {
        (
            async () => {
                let data = await fetch(rickymorty)
                            .then(res => res.json()
                            )
                setCharacters(data.results)
            }
        )()
    },[])
    
    return (
        <div className="characters">
            {
                characters.map(
                (character) => (
                    (character.status.toLowerCase()=='alive') ? <Card key={character.id} character={character} /> : ''
                ))
            }
        </div>
    );
}

export default CardList;
