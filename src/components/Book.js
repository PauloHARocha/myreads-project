import React, { Component } from 'react'


class Book extends Component {
    state = {

    }
    render() {
        const { book, updateBook } = this.props;
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
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
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