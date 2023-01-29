import { useState } from 'react';
import CharacterList from './CharacterList';
import {SubTitle} from './SubTitle';

export const Main = (props) => {
    return (
        <main>
            <SubTitle content={props.prop.subtitle} />
            <CharacterList data={props.prop} />    
        </main>
    );
}

export default Main;
