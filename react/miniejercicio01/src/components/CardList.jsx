import  {useEffect ,useState } from 'react';
import { Card } from './Card';


export const CardList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => 

        async () => {
            let data = await fetch(`https://rickandmortyapi.com/api/data/`).then(
            (res) => res.json()
            )

    setCharacters(data.results);
    
    
    }, []);
    
    return (
        <div>
            <h2>test</h2>

        </div>
    );
}

export default CardList;
