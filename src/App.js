import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import ListShelves from './components/ListShelves'
import SearchBook from './components/SearchBook'
import Loader from './components/Loader'
import './App.css'


class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        name: 'Currently Reading',
        value: 'currentlyReading'
      }, 
      {
        name: 'Want To Read',
        value: 'wantToRead'
      }, 
      {
        name: 'Read',
        value: 'read'
      }, 
    ],
    books: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.updateAllBooks();
  }

  updateBook = (book, shelf) => {
    this.setState({ loading: true })
    BooksAPI.update(book, shelf).then(() => {
      this.updateAllBooks()
    })
  }

  updateAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books, loading: false })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          <SearchBook books={this.state.books} updateBook={(book, shelf) => {
            this.updateBook(book, shelf);
            history.push('/');
          }}
            />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <Loader loading={this.state.loading}/>
              <ListShelves 
                shelves={this.state.shelves} 
                books={this.state.books} 
                updateBook={this.updateBook}/>
            </div>
            
            <div className="open-search">
              <Link className='close-create-contact' to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
