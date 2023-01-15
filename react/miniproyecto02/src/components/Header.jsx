import { useState } from 'react';
import {Title} from './Title';



const Header = (props) => {
    return (
        <header>
            <Title title={props.title.title}/>    
        </header>
    );
}

export default Header;
