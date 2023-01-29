import React from 'react';

const Author = ({data}) => {
    return (
        <article>
            <h1>{data.authorName}</h1>
            <h2>{data.authorSurname}</h2>
            <h3>{data.authorBirthDate}</h3>
        </article>
    );
}

export default Author;
