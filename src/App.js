import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as BooksAPI from './services/BooksAPI'
import BookShelves from './components/BookShelves'
import Search from './components/Search'
import About from './components/About'
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

  notify = (message) => toast.info(message, { position: toast.POSITION.BOTTOM_RIGHT });

  onChangeCategory(book, category, message){
    if (!category) return;
    BooksAPI.update(book, category).then(() => {
      this.setState(prevState => ({
        books: [
          ...prevState.books.filter(pBook => pBook.id !== book.id),
          {
            ...book,
            shelf: category
          }
        ]
      }));
      this.notify(message)
    });
  }
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books, loading: false })
  }
  render() {
    return (
      <div className="app">
        <ToastContainer autoClose={2000}/>
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

          <Route exact path='/about' component={About} />

        </Switch>
      </div>
    )
  }
}

export default App
