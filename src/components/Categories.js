import React from 'react'
import Loading from './Loading'
import Book from './Book'

const Categories = (props) =>  {
  return (
    <div className="bookshelf" key={props.keys}>
      <h2
        className="bookshelf-title"
        style={h2StyleTitle}
      >
      {props.displayName}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.isLoading && (
            <Loading message={`BookShelves is loading.`} />
          )}

          {!props.isLoading && props.books.length !== 0 ? (
            props.books.map(book => {
              return (
                <li key={book.id}>
                  <Book book={book} onChangeCategory={props.onChangeCategory}/>
                </li>
              );
            })
          ) : (
            <li className="message">There are no books in this bookshelves.</li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default Categories

const h2StyleTitle = {
  width: '100%',
  textAlign: 'center'
}
