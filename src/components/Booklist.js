import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';
import { fetchBooks } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = books.map((book) => (
    <Books key={Math.random()} title={book.title} author={book.author} id={book.item_id} />
  ));

  return (
    <div>
      <h2>My Book List</h2>
      {bookList}
      <FormInput />
    </div>
  );
};

export default Booklist;
