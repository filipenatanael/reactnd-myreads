import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Loading from './Loading'

class BookShelves extends React.PureComponent {
  static propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    const { isLoading, books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {true &&(<Loading message={`BookShelves is loading...`}/>)}
        </div>
      </div>
  )
}
}

export default BookShelves

// {this.props.books.map(book => (
//   <li key={book.id}> {book.title}</li>
// ))
// }
