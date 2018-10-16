import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import BookShelves from './components/BookShelves'
import './App.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true
    }
    this.onChangeCategory = this.onChangeCategory.bind(this)
  }
  onChangeCategory(book, category, message) {
    if (!category) return;
    BooksAPI.update(book, category).then(() => {
      this.setState(prevState => ({
        books: [
          ...prevState.books.filter(pBook => pBook.id !== book.id),
          {
            ...book,
            category
          }
        ]
      })).bind(this)
      console.log(message);
    })
  }
  onChangeCategory(book, shelf, message){
    if (!shelf) return;
    BooksAPI.update(book, shelf).then(() => {
      this.setState(currentState => ({
        books: [
          ...currentState.books.filter(sb => sb.id !== book.id),
          {
            ...book,
            shelf
          }
        ]
      }));
      alert(message);
    });
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
        loading: false
      }));
    })
  }
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <BookShelves
              books={this.state.books}
              isLoading={this.state.loading}
              onChangeCategory={this.onChangeCategory}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
