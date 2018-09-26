import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
    state = {
        
    }
    render() {
        const {books} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => (
                    <Book id={book.id} 
                          url={book.url} 
                          title={book.title} 
                          authors={book.authors}
                          key={book.id}/>
                ))}
            </ol>         
        )
    }
}


export default ListBooks