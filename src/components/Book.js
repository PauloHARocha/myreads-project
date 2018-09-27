import React, { Component } from 'react'


class Book extends Component {
    render() {
        const { book, updateBook, index_books } = this.props;
        const { authors, title, imageLinks, shelf } = this.props.book;

        let image = imageLinks ? imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={shelf}
                                onChange={e => (updateBook(book, e.target.value))}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">
                                    Currently Reading ({index_books.filter((book) => (book.shelf === "currentlyReading")).length})
                                </option>
                                <option value="wantToRead">
                                    Want to Read ({index_books.filter((book) => (book.shelf === "wantToRead")).length})
                                </option>
                                <option value="read">
                                    Read ({index_books.filter((book) => (book.shelf === "read")).length})
                                </option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}


export default Book