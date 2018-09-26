import React, { Component } from 'react'
import Shelf from './Shelf'


class ListShelfs extends Component {
    state = {

    }
    render() {
        const { shelfs, books, updateBook } = this.props;
        return (
            shelfs.map(shelf => (
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


export default ListShelfs