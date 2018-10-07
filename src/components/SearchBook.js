import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import ListBooks from './ListBooks'
import Loader from './Loader'
import * as BooksAPI from '../utils/BooksAPI'


class SearchBook extends Component {
    state = {
        query: '',
        search_results: [],
        loading: false
    }
    
    updateQuery = (query) => {
        this.setState({ query: query }, this.searchBooks)
    }

    searchBooks = () => {
        if (this.state.query){
            this.setState({loading: true})
            BooksAPI.search(this.state.query).then(results => {
                if (results.length > 0)
                    this.setState({ 
                        search_results: this.prepareSearchResults(results), 
                        loading:false })
                else
                    this.setState({ search_results: [], loading: false })
            })
        }
        else
            this.setState({ search_results: [] })
    }   

    prepareSearchResults = (results) => {
        return results.map(sr => {
            let bk = this.props.books.find((bk) => ( bk.id == sr.id ));
            sr.shelf = bk ? bk.shelf : 'none';
            return sr;
        }) 
    }
    render() {
        const { query, search_results, loading } = this.state;
        const { updateBook, books } = this.props;
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={1}
                            debounceTimeout={500} 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {(search_results.length < 1 && query.length > 0 && !loading) && (
                        <h2>Sorry, no results found for '{query}'</h2>
                    )}
                    {(search_results.length > 0 && !loading) && (
                        <h2>{search_results.length} results found for '{query}'</h2>
                    )}
                    <Loader loading={loading}/>
                    {(!loading) && (
                        <ListBooks 
                            books={search_results}
                            index_books={books}
                            updateBook={updateBook}/>
                    )}
                </div>
            </div>
        )
    }
}


export default SearchBook