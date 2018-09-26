import React, { Component } from 'react'
import ListBooks from './ListBooks'


class Shelf extends Component {
    state = {

    }
    render() {
        const { name, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ListBooks books={books} />
                </div>
            </div>
            )
    }
}


export default Shelf