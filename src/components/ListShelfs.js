import React, { Component } from 'react'
import Shelf from './Shelf'


class ListShelves extends Component {
    state = {

    }
    render() {
        const { shelves, books, updateBook } = this.props;
        return (
            shelves.map(shelf => (
                <Shelf 
                    shelf={shelf} 
                    books={books.filter(book => book.shelf === shelf.value)} 
                    updateBook={updateBook}
                    key={shelf.value}
                />
            ))
        )
    }
}


export default ListShelves