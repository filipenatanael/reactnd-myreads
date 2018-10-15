import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import './App.css'

import BookShelves from './components/BookShelves'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
        loading: false
      }));
      console.log(books);
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
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
