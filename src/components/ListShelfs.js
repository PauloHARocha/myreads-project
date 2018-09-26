import React, { Component } from 'react'
import Shelf from './Shelf'


class ListShelfs extends Component {
    state = {

    }
    render() {
        const { shelfs } = this.props;
        return (
            shelfs.map(shelf => (
                <Shelf name={shelf.name} books={shelf.books} key={shelf.name}/>
            ))
        )
    }
}


export default ListShelfs