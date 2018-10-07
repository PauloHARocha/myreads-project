import React from 'react'
import Shelf from './Shelf'


const ListShelves = props => {
    
    const { shelves, books, updateBook } = props;
    return (
        shelves.map(shelf => (
            <Shelf 
                shelf={shelf} 
                books={books.filter(book => book.shelf === shelf.value)}
                index_books={books} 
                updateBook={updateBook}
                key={shelf.value}
            />
        ))
    )
    
}


export default ListShelves