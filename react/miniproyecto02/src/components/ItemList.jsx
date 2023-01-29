import {useState} from 'react';

export const ItemList = ({children}) => {
    return (
        <li>
            {children}
        </li>
    );
}

export default ItemList;
