import React from 'react'
import ChangeCategory from './ChangeCategory'
import NoCoverAvailable from '../icons/no-cover-available.png'

const Book = ({ book, onChangeCategory }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 130,
            height: 190,
            backgroundImage: `url("${book.imageLinks
              ? book.imageLinks.smallThumbnail
              : NoCoverAvailable}")`
          }}
        />
        <ChangeCategory onChangeCategory={onChangeCategory} book={book} />
      </div>

      <a className="book-title" target="_blank" href={book.previewLink}>
        {book.title}
      </a>

      <div className="book-authors">
        { book.authors && book.authors.concat().join(" / ") }
      </div>
    </div>
  );
};

export default Book
