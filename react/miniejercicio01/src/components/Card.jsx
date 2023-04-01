import { useState, useEffect } from 'react';

export const Card = (data) => {
    return (
        <div>
            <h1>{data.id}</h1>
            <h2>{data.name}</h2>
            <h3>{data.origin.name}</h3>
            <img src={data.image} />
        </div>
    );
}

export default Card;
