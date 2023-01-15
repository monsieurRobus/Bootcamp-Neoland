import {useState} from 'react';
import {ItemList} from './ItemList';
import Paragraph from './Paragraph';

export const CharacterList = (data) => {
    return (
        <ul>
            
                <ItemList>
                    <Paragraph>{data.data.name}</Paragraph>
                </ItemList>
                <ItemList>
                    <Image>

                    </Image>
                </ItemList>
                <ItemList>

                </ItemList>
                <ItemList>
                    <Paragraph>{data.data.status}</Paragraph>
                </ItemList>
                <ItemList>
                    <Paragraph>{data.data.origin}</Paragraph>
                </ItemList>
                
            
        </ul>
    );
}

export default CharacterList;
