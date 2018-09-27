import React, { Component } from 'react'
import ListBooks from './ListBooks'


class Shelf extends Component {
    
    render() {
        const { shelf, books, updateBook, index_books } = this.props;
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
}


export default Shelf