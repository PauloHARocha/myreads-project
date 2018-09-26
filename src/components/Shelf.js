import React, { Component } from 'react'
import ListBooks from './ListBooks'


class Shelf extends Component {
    state = {

    }
    render() {
        const { shelf, books, updateBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ListBooks books={books} updateBook={updateBook}/>
                </div>
            </div>
            )
    }
}


export default Shelf