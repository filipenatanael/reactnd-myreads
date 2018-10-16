import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as BooksAPI from '../BooksAPITest'
configure({ adapter: new Adapter() });

import BookShelves from '../../components/BookShelves'

describe('BookShelves Component', () => {
  let component;

  beforeEach(() => {
    const _onChangeCategory = jest.fn();

    BooksAPI.getAll().then(books => {
      const props = {
        books: books,
        isLoading: false,
        onChangeCategory: _onChangeCategory
      };
      component = shallow(<BookShelves {...props} />);
    });
  });

  test('Should have an <h1>.', () => {
    expect(component.find('h1').length).toBe(1);
  });

});
