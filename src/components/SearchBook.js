import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from '../utils/BooksAPI'


class SearchBook extends Component {
    state = {
        query: '',
        books: []
    }
    
    updateQuery = (query) => {
        this.setState({ query: query }, this.searchBooks)
    }

    searchBooks = () => {
        if (this.state.query) {
            BooksAPI.search(this.state.query).then(bks => {
                if (bks.length > 0)
                    this.setState({
                        books: bks.map(bk => {
                            return {
                                title: (bk.title) ? bk.title : '',
                                authors: (bk.authors) ? bk.authors : [],
                                url: (bk.imageLinks) ? bk.imageLinks.thumbnail : '',
                                id: bk.id
                                    }
                        })
                    })
                else
                    this.setState({ books: [] })
            })
        }
        else
            this.setState({ books: [] })
    }
        
    render() {
        const { query, books } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks books={books}/>
                </div>
            </div>
        )
    }
}


export default SearchBook