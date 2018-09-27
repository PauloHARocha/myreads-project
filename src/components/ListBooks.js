import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
    render() {
        const { books, updateBook , index_books} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book 
                        book={book}
                        index_books={index_books}
                        updateBook={updateBook} 
                        key={book.id}/>
                ))}
            </ol>         
        )
    }
}


export default ListBooks