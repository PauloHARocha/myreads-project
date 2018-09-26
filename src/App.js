import React from 'react'
import { Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import ListShelfs from './components/ListShelfs'
import SearchBook from './components/SearchBook'
import './App.css'


class BooksApp extends React.Component {
  state = {
    shelfs: [],
  }
  componentDidMount() {
    let init_shelfs = [
      {
        name: 'Currently Reading',
        books: [
          {
            title: 'To Kill a Mockingbird',
            authors: 'Harper Lee',
            url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
            id: 0,
          },
          {
            title: "Ender's Game",
            authors: 'Orson Scott Card',
            url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
            id: 1,
          }
        ]
      },
      {
        name: 'Want to Read',
        books: [
          {
            title: 'To Kill a Mockingbird',
            authors: 'Harper Lee',
            url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
            id: 2,
          },
          {
            title: "Ender's Game",
            authors: 'Orson Scott Card',
            url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
            id: 3,
          }
        ]
      },
      {
        name: 'Read',
        books: [
          {
            title: 'To Kill a Mockingbird',
            authors: 'Harper Lee',
            url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
            id: 4,
          },
          {
            title: "Ender's Game",
            authors: 'Orson Scott Card',
            url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
            id: 5,
          }
        ]
      },
    ]
    this.setState({
      shelfs: init_shelfs
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBook/>
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <ListShelfs shelfs={this.state.shelfs}/>
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
