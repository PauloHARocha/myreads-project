import React from 'react'
import ListBooks from './ListBooks'


const Shelf = props => {
    
    const { shelf, books, updateBook, index_books } = props;
    let index;

    if (books.length === 1) index = `(${books.length} book)` 
    else if(books.length > 1) index = `(${books.length} books)` 

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name} {index}</h2>
            <div className="bookshelf-books">
                <ListBooks books={books} updateBook={updateBook} index_books={index_books}/>
            </div>
        </div>
        )
    
}

export default Shelf