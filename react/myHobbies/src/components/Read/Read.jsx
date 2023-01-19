import React from 'react';
import Author from './Author';
import Book from './Book';
import Books from './Books';

import './read.css'
const Read = (readInfo) => {
    return (
        <section>
            <h1>My favourite Book</h1>
            <div className="read">
                <Author data={readInfo.data}/>
                <Book>
                    <h4>{readInfo.data.title} {readInfo.data.dateOfPublication}</h4>
                    <img src={readInfo.data.bookImage} />                
                </Book>
                <Books books={readInfo.data.otherBooks} />
            </div>
        </section>
    );
}

export default Read;
