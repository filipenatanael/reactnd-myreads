import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from './utils/Loading'
import Categories from './Categories'
import ImageLogo from '../icons/app-logo.png'
import { CATEGORIES } from './utils/Constants'
import NavBar from './utils/NavBar'

class BookShelves extends React.PureComponent {
  static propTypes = {
    books: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }
  filterBookByShelf = (books, shelf) => {
    return books.filter(book => book.shelf === shelf)
  }
  render() {
    const { loading, isLoading, books, onChangeCategory } = this.props
    return (
      <div className="list-books">
        <NavBar />
        
        <div className="list-books-content">
          {isLoading &&(<Loading message={`BookShelves is loading...`} />)}

          {!isLoading && CATEGORIES.map(category => {
            return(
              <Categories
                key={category.name}
                displayName={category.displayName}
                isLoading={loading}
                books={this.filterBookByShelf(books, category.name)}
                onChangeCategory={onChangeCategory}
              />
            )
          })}
        </div>
        <div className="open-search">
          <Link to='/search'>Add Book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelves
