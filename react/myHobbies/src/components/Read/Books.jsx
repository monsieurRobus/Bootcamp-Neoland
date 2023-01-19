import React from 'react';



const Books = (props) => {
    return (
        <ul>
            {
                props.books.map( (book) => {
                    return <li className="booklist-element">{book.info}</li>
                })
            }
        </ul>
    );
}

export default Books;
