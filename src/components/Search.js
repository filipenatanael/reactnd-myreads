import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from '../services/BooksAPI'
import Loading from './utils/Loading'
import Book from './Book'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      isLoading: false,
      searchedBooks: []
    };
    this.updateQuery = this.updateQuery.bind(this)
    this.mergeSearchResultWithBooks = this.mergeSearchResultWithBooks.bind(this)
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query,
      isLoading: true
    }));
    if (!query) {
      this.setState(() => ({
        searchedBooks: [],
        isLoading: false
      }));
      return;
    }
    BooksAPI.search(query).then(books => {
      this.setState(prevState => ({
        searchedBooks:
          !prevState.query || !books || books.error === "empty query"
            ? []
            : this.mergeSearchResultWithBooks(books),
        isLoading: false
      }))
    })
  }
  mergeSearchResultWithBooks = (searchResults, props) => {
    return searchResults.map(response => {
      const book = this.props.books.find(book => response.id === book.id);
      if (book) response.shelf = book.shelf;
      return response;
    })
  }
  render() {
    const { searchedBooks, isLoading } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <DebounceInput
              debounceTimeout={250}
              type="text"
              placeholder="Search for title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {isLoading && (
              <Loading message={`BookShelves is loading`} />
            )}
            {!isLoading &&
              (searchedBooks.length === 0 ? (
                <li className="message">No books found! Try again.</li>
              ) : (
                searchedBooks.map(book => (
                  <li key={book.id}>
                    <Book book={book} onChangeCategory={this.props.onChangeCategory} />
                  </li>
                ))
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
