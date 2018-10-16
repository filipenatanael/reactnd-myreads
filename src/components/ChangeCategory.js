import React from "react";

const CATEGORIES = [
  {
    name: "currentlyReading",
    displayName: "Currently Reading"
  },
  {
    name: "wantToRead",
    displayName: "Want to Read"
  },
  {
    name: "read",
    displayName: "Read"
  }
];

const MESSAGE = "Book moved with success";

const ChangeCategory = (props, book, onChangeCategory) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={ props.book.shelf || "none"}
      onChange={event => props.onChangeCategory(props.book, event.target.value, MESSAGE)}
      >
        <option disabled>
          Move to...
        </option>
         {CATEGORIES.map(category => (
           <option key={category.name} value={category.name}>
           {category.displayName}
           </option>
      ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ChangeCategory
