import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
    state = {
        
    }
    render() {
        const { books, updateBook } = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book 
                        book={book}
                        updateBook={updateBook} 
                        key={book.id}/>
                ))}
            </ol>         
        )
    }
}


export default ListBooks