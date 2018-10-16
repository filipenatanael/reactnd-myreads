import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as BooksAPI from './services/BooksAPI'
import BookShelves from './components/BookShelves'
import Search from './components/Search'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true
    }
    this.onChangeCategory = this.onChangeCategory.bind(this)
  }

  notify = (message) => toast(message);

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
      this.notify(message)
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
        <ToastContainer autoClose={3000}/>
        <Switch>
          <Route exact path='/' render={() => (
            <BookShelves
              books={this.state.books}
              isLoading={this.state.loading}
              onChangeCategory={this.onChangeCategory}
            />
          )} />

          <Route path='/search' render={() => (
            <Search
              books={this.state.books}
              onChangeCategory={this.onChangeCategory}
            />
          )} />

        </Switch>
      </div>
    )
  }
}

export default App
