import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from '../utils/BooksAPI'


class SearchBook extends Component {
    state = {
        query: '',
        search_results: []
    }
    
    updateQuery = (query) => {
        this.setState({ query: query }, this.searchBooks)
    }

    searchBooks = () => {
        if (this.state.query) {
            BooksAPI.search(this.state.query).then(results => {
                // console.log(results);
                if (results.length > 0)
                    this.setState({
                        search_results: results
                    })
                else
                    this.setState({ search_results: [] })
            })
        }
        else
            this.setState({ search_results: [] })
    }
        
    render() {
        const { query, search_results } = this.state;
        const { updateBook, books } = this.props;
        
        search_results.forEach(sr => {
            sr.shelf = 'none';
            books.forEach(bk => {
                if(bk.id === sr.id)
                    sr.shelf = bk.shelf;
            })
        })
    
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
                    <ListBooks 
                        books={search_results}
                        updateBook={updateBook}/>
                </div>
            </div>
        )
    }
}


export default SearchBook