import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from './utils/Loading'
import Categories from './Categories'
import ImageLogo from '../icons/app-logo.png'
import { CATEGORIES } from './utils/Constants'

const MENUS = [
  {  path: '/about', name: 'About' },
  {  path: '/contact', name: 'Contact' }
];

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
        <div className="header-navigation-bar">
          <div className="navigation-bar-logo">
            <img src={ImageLogo} alt="MyReads Logo" height="42" width="42" />
            <div className="navigation-bar-title">MyReads</div>
          </div>
          <nav>
            <ul class="menu">
              { MENUS.map(item => {
                return (
                  <li><a href={item.path}>{item.name}</a></li>
                );
              })}
          </ul>
          </nav>
        </div>

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
